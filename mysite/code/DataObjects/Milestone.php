<?php

/**
 * Class Milestone
 */
class Milestone extends DataObject
{
    /**
     * @var array
     */
    private static $db = [
        'Title' => 'Varchar(255)',
        'Date' => 'Datetime',
        'Content' => 'HTMLText'
    ];

    /**
     * @var array
     */
    private static $summary_fields = [
        'Date' => 'Date',
        'Title' => 'Title',
        'Image.CMSThumbnail' => 'Image'
    ];

    /**
     * @var array
     */
    private static $has_one = [
        'Image' => 'Image'
    ];

    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldsToTab('Root.Main', [
            new TextField('Title', 'Title'),
            new DatetimeField('Date', 'Date'),
            $uploadField = new UploadField(
                'Image',
                'Image'
            ),
            new HtmlEditorField('Content', 'Content')
        ]);

        $uploadField->setFolderName('Uploads/Milestones/');

        return $fields;
    }

    /**
     * @return array
     */
    public function asDataArray()
    {
        return [
            'ID' => $this->ID,
            'Title' => $this->Title
        ];
    }

    /**
     * @return RequiredFields
     */
    public function getCMSValidator()
    {
        return new RequiredFields('Title');
    }
}
