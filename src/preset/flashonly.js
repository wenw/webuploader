/**
 * @fileOverview 只有flash实现的文件版本。
 */
define([
    '../base',
    '../promise',
    '../uploader',

    // widgets
    '../widgets/filepicker',
    '../widgets/image',
    '../widgets/queue',
    '../widgets/runtime',
    '../widgets/upload',
    '../widgets/validator',

    // runtimes

    // flash
    '../runtime/flash/filepicker',
    '../runtime/flash/image',
    '../runtime/flash/transport'
], function( Base ) {
    return Base;
});