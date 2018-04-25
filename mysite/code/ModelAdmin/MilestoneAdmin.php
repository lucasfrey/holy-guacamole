<?php

class MilestoneAdmin extends ModelAdmin {

    private static $menu_title = 'Milestones';

    private static $url_segment = 'milestones';

    private static $managed_models = array (
        'Milestone'
    );
}