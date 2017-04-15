<?php

class GalleryPage extends Page
{
    /**
     * @var array
     */
    private static $has_many = [
        'ItemPages' => 'ItemPage'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        return $fields;
    }
}

class GalleryPage_Controller extends Page_Controller
{
    /**
     * Returns a paginated list of all pages in the site.
     */
    public function PaginatedItems() {
        $list = ItemPage::get()->filter('ParentID', $this->curr()->ID);

        return new PaginatedList($list, $this->getRequest());
    }
}
