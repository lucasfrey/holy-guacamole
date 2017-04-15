<?php

class PropertyAdmin extends ModelAdmin {

    private static $menu_title = 'Items';

    private static $url_segment = 'items';

    private static $managed_models = array (
        'ItemPage'
    );
}