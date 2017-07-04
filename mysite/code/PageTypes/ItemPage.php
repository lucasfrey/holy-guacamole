<?php

class ItemPage extends Page
{
    /**
     * @var array
     */
    private static $db = [
        'Title' => 'Varchar(255)',
        'Content' => 'HTMLText',
        'ContentFR' => 'HTMLText'
    ];

    /**
     * @var array
     */
    private static $has_one = [
        'GalleryPage' => 'GalleryPageID',
        'Photo' => 'Image'
    ];

    /**
     * @return FieldList
     */
    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab('Root.Main', new TextField('Title', 'Title'));
        $fields->addFieldToTab('Root.French', new HtmlEditorField('ContentFR', 'ContentFR'));
        $fields->addFieldToTab('Root.Main', new DateField('Created', 'Created'));
        $fields->addFieldToTab('Root.Main', $uploader = UploadField::create('Photo'));

        if ($this->Parent()->Title) {
            $uploader->setFolderName('Photos/' . $this->Parent()->Title);
        } else {
            $uploader->setFolderName('Photos/Uncategorized');
        }

        $uploader->getValidator()->setAllowedExtensions(array('png','gif','jpeg','jpg'));

        return $fields;
    }
}

class ItemPage_Controller extends Page_Controller
{

}
