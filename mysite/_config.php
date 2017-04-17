<?php

require_once 'conf/ConfigureFromEnv.php';

// Use Imagick for resizing images if available
if (class_exists('Imagick')) {
    Image::set_backend('ImagickBackend');
}

// Disable caching in dev mode
if (Director::isDev()) {
    $cacheInclude = Injector::inst()->get('CacheInclude');
    $cacheInclude->setEnabled(false);
}