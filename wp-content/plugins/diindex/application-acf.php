<?php

if (function_exists('acf_add_local_field_group')):

acf_add_local_field_group(array(
    'key'    => 'group_572b7ec467eaa',
    'title'  => 'New Wells',
    'fields' => array(
        array(
            'key'               => 'field_572b7f0265a47',
            'label'             => 'Map Image',
            'name'              => 'map_image',
            'type'              => 'image',
            'instructions'      => '',
            'required'          => 0,
            'conditional_logic' => 0,
            'wrapper'           => array(
                'width' => '',
                'class' => '',
                'id'    => '',
            ),
            'return_format' => 'array',
            'preview_size'  => 'thumbnail',
            'library'       => 'all',
            'min_width'     => '',
            'min_height'    => '',
            'min_size'      => '',
            'max_width'     => '',
            'max_height'    => '',
            'max_size'      => '',
            'mime_types'    => '',
        ),
        array(
            'key'               => 'field_572b7f2a65a48',
            'label'             => 'Expanded Version',
            'name'              => 'expanded_version',
            'type'              => 'file',
            'instructions'      => '',
            'required'          => 0,
            'conditional_logic' => 0,
            'wrapper'           => array(
                'width' => '',
                'class' => '',
                'id'    => '',
            ),
            'return_format' => 'array',
            'library'       => 'all',
            'min_size'      => '',
            'max_size'      => '',
            'mime_types'    => '',
        ),
    ),
    'location' => array(
        array(
            array(
                'param'    => 'page',
                'operator' => '==',
                'value'    => '10',
            ),
        ),
    ),
    'menu_order'            => 0,
    'position'              => 'normal',
    'style'                 => 'default',
    'label_placement'       => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen'        => '',
    'active'                => 1,
    'description'           => '',
));

acf_add_local_field_group(array(
    'key'    => 'group_572b7f5eb3114',
    'title'  => 'Rig Movement',
    'fields' => array(
        array(
            'key'               => 'field_572b7f5eb8793',
            'label'             => 'Map Image',
            'name'              => 'map_image',
            'type'              => 'image',
            'instructions'      => '',
            'required'          => 0,
            'conditional_logic' => 0,
            'wrapper'           => array(
                'width' => '',
                'class' => '',
                'id'    => '',
            ),
            'return_format' => 'array',
            'preview_size'  => 'thumbnail',
            'library'       => 'all',
            'min_width'     => '',
            'min_height'    => '',
            'min_size'      => '',
            'max_width'     => '',
            'max_height'    => '',
            'max_size'      => '',
            'mime_types'    => '',
        ),
        array(
            'key'               => 'field_572b7f5eb87c1',
            'label'             => 'Expanded Version',
            'name'              => 'expanded_version',
            'type'              => 'file',
            'instructions'      => '',
            'required'          => 0,
            'conditional_logic' => 0,
            'wrapper'           => array(
                'width' => '',
                'class' => '',
                'id'    => '',
            ),
            'return_format' => 'array',
            'library'       => 'all',
            'min_size'      => '',
            'max_size'      => '',
            'mime_types'    => '',
        ),
    ),
    'location' => array(
        array(
            array(
                'param'    => 'page',
                'operator' => '==',
                'value'    => '10',
            ),
        ),
    ),
    'menu_order'            => 0,
    'position'              => 'normal',
    'style'                 => 'default',
    'label_placement'       => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen'        => '',
    'active'                => 1,
    'description'           => '',
));

endif;
