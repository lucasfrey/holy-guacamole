<?php

/**
 * Class GridFieldConfig_ManyFileEditor
 */
class GridFieldConfig_ManyFileEditor extends GridFieldConfig_ManyEditor
{

    /**
     * @param SS_List|void $relationName
     * @param null|string|void $folderName
     * @param null $sortField
     * @param null $itemsPerPage
     */
    public function __construct(
        $relationName,
        $folderName,
        $sortField = null,
        $itemsPerPage = null
    )
    {
        parent::__construct(null, $sortField, $itemsPerPage);

        $bulkUploadConfig =  new GridFieldBulkUpload($relationName);
        $bulkUploadConfig->setUfSetup('setFolderName', $folderName);
        
        $this->addComponent(
           $bulkUploadConfig
        );
        $this->removeComponentsByType('GridFieldAddExistingAutocompleter');
    }
}
