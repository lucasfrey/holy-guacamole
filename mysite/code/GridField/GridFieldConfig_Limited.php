<?php

/**
 * Class GridFieldConfig_Limited
 */
class GridFieldConfig_Limited extends GridFieldConfig_Sortable
{
    /**
     * GridFieldConfig_Limited constructor.
     * @param null $count
     * @param $limit
     * @param null $sortField
     */
    public function __construct($count, $limit, $sortField = null)
    {
        parent::__construct($sortField);

        // Remove the add button if the amount of items in the grid field is equal or past the limit
        // But only if those parameters have been supplied
        if ($count && $limit && $count >= $limit) {
            $this->removeComponentsByType('GridFieldAddNewButton');
        }
    }
}