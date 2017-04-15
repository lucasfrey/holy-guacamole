<?php

/**
 * Class GridFieldConfig_Sortable
 */
class GridFieldConfig_Sortable extends GridFieldConfig_RecordEditor
{
    /**
     * GridFieldConfig_Sortable constructor.
     * @param null $sortField
     */
    public function __construct($sortField = null)
    {
        parent::__construct();

        // Make the grid field sortable if a column name has been supplied
        if ($sortField) {
            $this->addComponent(new GridFieldSortableRows($sortField));
        }
    }
}