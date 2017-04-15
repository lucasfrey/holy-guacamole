<?php

/**
 * Class GridFieldManyManyRelationHandler
 */
class GridFieldManyManyRelationHandler extends GridFieldRelationHandler implements GridField_DataManipulator
{
    /**
     * @var GridFieldManyRelationHandler_HasManyList
     */
    protected $cheatList;
    /**
     * @var GridFieldManyRelationHandler_ManyManyList
     */
    protected $cheatManyList;

    /**
     * @param bool $useToggle
     * @param string $segement
     */
    public function __construct($useToggle = true, $segement = 'before')
    {
        parent::__construct($useToggle, $segement);
        $this->cheatList = new GridFieldManyRelationHandler_HasManyList;
        $this->cheatManyList = new GridFieldManyRelationHandler_ManyManyList;
    }

    /**
     * @param GridField $gridField
     * @param DataObject $record
     * @param string $columnName
     * @return HTMLText
     */
    public function getColumnContent($gridField, $record, $columnName)
    {
        $list = $gridField->getList();
        if (!$list instanceof RelationList) {
            user_error('GridFieldManyRelationHandler requires the GridField to have a RelationList. Got a ' . get_class($list) . ' instead.', E_USER_WARNING);
        }

        $state = $this->getState($gridField);
        $checked = in_array($record->ID, $state->RelationVal->toArray());
        $field = array('Checked' => $checked, 'Value' => $record->ID, 'Name' => $this->relationName($gridField));
        if ($list instanceof HasManyList) {
            $key = $record->{$this->cheatList->getForeignKey($list)};
            if ($key && !$checked) {
                $field['Disabled'] = true;
            }
        }
        $field = new ArrayData($field);

        return $field->renderWith('GridFieldManyRelationHandlerItem');
    }

    /**
     * @param GridField $gridField
     * @param SS_List $list
     * @return SS_List
     */
    public function getManipulatedData(GridField $gridField, SS_List $list)
    {
        if (!$list instanceof RelationList) {
            user_error('GridFieldManyRelationHandler requires the GridField to have a RelationList. Got a ' . get_class($list) . ' instead.', E_USER_WARNING);
        }

        $state = $this->getState($gridField);

        // We don't use setupState() as we need the list
        if ($state->FirstTime) {
            $state->RelationVal = array_values($list->getIdList()) ?: array();
        }
        if (!$state->ShowingRelation && $this->useToggle) {
            return $list;
        }

        $baseClass = $list->dataClass();

        return $baseClass::get();
    }

    /**
     * @param $gridField
     * @return string
     */
    protected function relationName($gridField)
    {
        return $gridField->getName() . get_class($gridField->getList());
    }

    /**
     * @param GridField $gridField
     * @param $arguments
     * @param $data
     */
    protected function cancelGridRelation(GridField $gridField, $arguments, $data)
    {
        parent::cancelGridRelation($gridField, $arguments, $data);

        $state = $this->getState($gridField);
        $state->RelationVal = array_values($gridField->getList()->getIdList()) ?: array();
    }

    /**
     * @param GridField $gridField
     * @param $arguments
     * @param $data
     */
    protected function saveGridRelation(GridField $gridField, $arguments, $data)
    {
        $state = $this->getState($gridField);
        $gridField->getList()->setByIdList($state->RelationVal->toArray());
        parent::saveGridRelation($gridField, $arguments, $data);
    }
}
