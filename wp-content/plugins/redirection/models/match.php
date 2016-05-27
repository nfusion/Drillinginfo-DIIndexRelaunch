<?php

class Red_Match
{
    public $url;

    public function __construct($values = '')
    {
        if ($values) {
            $this->url = $values;

            $obj = maybe_unserialize($values);

            if (is_array($obj)) {
                foreach ($obj as $key => $value) {
                    $this->$key = $value;
                }
            }
        }
    }

    public function data($details)
    {
        $data = $this->save($details);
        if (count($data) == 1 && !is_array(current($data))) {
            $data = current($data);
        } else {
            $data = serialize($data);
        }

        return $data;
    }

    public function save($details)
    {
        return array();
    }

    public function name()
    {
        return '';
    }

    public function show()
    {
    }

    public function wants_it()
    {
        return true;
    }

    public function get_target($url, $matched_url, $regex)
    {
        return false;
    }

    public static function create($name, $data = '')
    {
        $avail = self::available();
        if (isset($avail[strtolower($name)])) {
            $classname = $name.'_match';

            if (!class_exists(strtolower($classname))) {
                include dirname(__FILE__).'/../matches/'.$avail[strtolower($name)];
            }

            return new $classname($data);
        }

        return false;
    }

    public static function all()
    {
        $data = array();

        $avail = self::available();
        foreach ($avail as $name => $file) {
            $obj = self::create($name);
            $data[$name] = $obj->name();
        }

        return $data;
    }

    public static function available()
    {
        return array(
            'url'      => 'url.php',
            'referrer' => 'referrer.php',
            'agent'    => 'user-agent.php',
            'login'    => 'login.php',
         );
    }

    public function match_name()
    {
        return '';
    }
}
