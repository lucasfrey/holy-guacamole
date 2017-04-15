<?php

class HomePage extends Page
{

}

class HomePage_Controller extends Page_Controller
{
    /**
     * Returns 10 items for the homepage
     */
    public function getItems() {
        return ItemPage::get()->limit(10);
    }
}
