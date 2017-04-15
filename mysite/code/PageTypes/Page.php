<?php

class Page extends SiteTree
{

}

class Page_Controller extends ContentController
{
    public function isMobile() {
        $detect = new Mobile_Detect;
        return $detect->isMobile();
    }
}
