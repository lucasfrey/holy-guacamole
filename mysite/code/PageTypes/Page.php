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

    /**
     * Returns a paginated list of all pages in the site.
     */
    public function PaginatedItems() {
        $list = ItemPage::get();

        return new PaginatedList($list, $this->getRequest());
    }
}
