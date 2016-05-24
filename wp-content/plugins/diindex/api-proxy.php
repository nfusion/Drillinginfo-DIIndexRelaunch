<?php
// Topic: Configuration Options
//
// These variables can be manually edited in the PHP file if necessary.
//
//   $enable_jsonp - Only enable <JSONP requests> if you really need to. If you
//     install this script on the same server as the page you're calling it
//     from, plain JSON will work. Defaults to false.
//   $enable_native - You can enable <Native requests>, but you should only do
//     this if you also whitelist specific URLs using $valid_url_regex, to avoid
//     possible XSS vulnerabilities. Defaults to false.
//   $valid_url_regex - This regex is matched against the url parameter to
//     ensure that it is valid. This setting only needs to be used if either
//     $enable_jsonp or $enable_native are enabled. Defaults to '/.*/' which
//     validates all URLs.
//
// ############################################################################

// Change these configuration options if needed, see above descriptions for info.
$enable_jsonp = true; // change to false for prod
$enable_native = false;
$valid_url_regex = '/.*/';

// ############################################################################

$url = $_GET['url'];

if (!$url) {

  // Passed url not specified.
  $contents = 'ERROR: url not specified';
    $status = array('http_code' => 'ERROR');
} elseif (!preg_match($valid_url_regex, $url)) {

  // Passed url doesn't match $valid_url_regex.
  $contents = 'ERROR: invalid url';
    $status = array('http_code' => 'ERROR');
} else {
    $ch = curl_init($url);

    if (strtolower($_SERVER['REQUEST_METHOD']) == 'post') {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST);
    }

    if (!empty($_GET['send_cookies']) && $_GET['send_cookies']) {
        $cookie = array();
        foreach ($_COOKIE as $key => $value) {
            $cookiearray[] = $key.'='.$value;
        }
        if (!empty($_GET['send_session']) && $_GET['send_session']) {
            $cookiearray[] = SID;
        }
        $cookie = implode('; ', $cookie);

        curl_setopt($ch, CURLOPT_COOKIE, $cookie);
    }

    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('x-api-key: d06a6c14d099e2bb966e821c58210580'));

    curl_setopt($ch, CURLOPT_USERAGENT, !empty($_GET['user_agent']) ? $_GET['user_agent'] : $_SERVER['HTTP_USER_AGENT']);

    list($header, $contents) = preg_split('/([\r\n][\r\n])\\1/', curl_exec($ch), 2);

    $status = curl_getinfo($ch);

    curl_close($ch);
}

// Split header text into an array.
$header_text = preg_split('/[\r\n]+/', $header);

if (!empty($_GET['mode']) && $_GET['mode'] == 'native') {
    if (!$enable_native) {
        $contents = 'ERROR: invalid mode';
        $status = array('http_code' => 'ERROR');
    }

  // Propagate headers to response.
  foreach ($header_text as $header) {
      if (preg_match('/^(?:Content-Type|Content-Language|Set-Cookie):/i', $header)) {
          header($header);
      }
  }

    echo $contents;
} else {

  // $data will be serialized into JSON data.
  $data = array();

  // Propagate all HTTP headers into the JSON data object.
  if (!empty($_GET['full_headers']) && $_GET['full_headers']) {
      $data['headers'] = array();

      foreach ($header_text as $header) {
          preg_match('/^(.+?):\s+(.*)$/', $header, $matches);
          if ($matches) {
              $data['headers'][$matches[1]] = $matches[2];
          }
      }
  }

  // Propagate all cURL request / response info to the JSON data object.
  if (!empty($_GET['full_status']) && $_GET['full_status']) {
      $data['status'] = $status;
  } else {
      $data['status'] = array();
      $data['status']['http_code'] = $status['http_code'];
  }

  // Set the JSON data object contents, decoding it from JSON if possible.
  $decoded_json = json_decode($contents);
    $data['contents'] = $decoded_json ? $decoded_json : $contents;

  // Generate appropriate content-type header.
  $is_xhr = strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    header('Content-type: application/'.($is_xhr ? 'json' : 'x-javascript'));

  // Get JSONP callback.
  $jsonp_callback = $enable_jsonp && isset($_GET['callback']) ? $_GET['callback'] : null;

  // Generate JSON/JSONP string
  $json = json_encode($data);

    echo $jsonp_callback ? "$jsonp_callback($json)" : $json;
}
