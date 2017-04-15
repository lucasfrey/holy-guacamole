<?php


/**
 * Class GridFieldConfig_ManyMany
 */
class GridFieldConfig_ManyMany extends GridFieldConfig_RecordEditor
{

    /**
     * @param null $itemsPerPage How many items per page should show up
     * @param null $sortField
     */
    public function __construct($itemsPerPage = null, $sortField = null)
    {
        if ($sortField) {
            $this->addComponent(new GridFieldOrderableRows($sortField));
        }
        $this->addComponent(new GridFieldManyManyRelationHandler());

        parent::__construct($itemsPerPage);

        $this->removeComponentsByType('GridFieldAddNewButton');
        $this->removeComponentsByType('GridFieldDeleteAction');
    }

} 