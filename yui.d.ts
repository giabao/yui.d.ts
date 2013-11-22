// Type definitions for yui 3.14.0
// Project: https://github.com/yui/yui3/blob/release-3.14.0/src/yui/js
// Definitions by:
// Gia Bảo @ Sân Đình <https://github.com/giabao>

/// <reference path="yui-test.d.ts" />

interface YUI{
    Test: YUITest.YUITestStatic
    Assert: YUITest.IAssert
    add(name: string, fn: (Y: YUI, name: string) => any, version: string, details?: Y.IConfig): YUI;
}

declare module Y{
    interface IConfig{
        requires: string[]
        optional: string[]
        use: string[]
    }
}

declare var Y: YUI;
declare var YUI: YUI;
