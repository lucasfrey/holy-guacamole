<?php

/**
 * Class GridFieldConfig_ManyEditor
 */
class GridFieldConfig_ManyEditor extends GridFieldConfig
{
    /**
     * @param \SS_List|void $searchList
     * @param string|void $sortField
     * @param int|void $itemsPerPage
     */
    public function __construct(
        SS_List $searchList = null,
        $sortField = null,
        $itemsPerPage = null
    )
    {
        $this->addComponent(new GridFieldButtonRow('before'));
        $this->addComponent($autoComplete = new GridFieldAddExistingAutocompleter('buttons-before-right'));
        $this->addComponent(new GridFieldToolbarHeader());
        $this->addComponent($sort = new GridFieldSortableHeader());
        $this->addComponent($filter = new GridFieldFilterHeader());
        $this->addComponent(new GridFieldDataColumns());
        $this->addComponent(new GridFieldEditButton());
        $this->addComponent(new GridFieldDeleteAction(true));
        $this->addComponent(new GridFieldPageCount('toolbar-header-right'));
        $this->addComponent($pagination = new GridFieldPaginator($itemsPerPage));
        $this->addComponent(new GridFieldDetailForm());

        $sort->setThrowExceptionOnBadDataType(false);
        $filter->setThrowExceptionOnBadDataType(false);
        $pagination->setThrowExceptionOnBadDataType(false);
        
        if ($searchList) {
            $autoComplete->setSearchList($searchList);
        }

        if ($sortField) {
            $this->addComponent(new GridFieldOrderableRows($sortField));
        }
    }
}
