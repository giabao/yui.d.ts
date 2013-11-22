// Type definitions for yui 3.14.0
// Project: https://github.com/yui/yui3/blob/release-3.14.0/src/test/js
// Definitions by:
// Gia Bảo @ Sân Đình <https://github.com/giabao>

declare module YUITest {
    interface YUITestStatic{
        Assert: IAssert
        Case: TestCase
        Runner: TestRunner
    }
    interface EventTarget{
        attach(type: string, listener: Function): void
        subscribe(type: string, listener: Function): void
        fire(event: Object): void
        fire(event: string): void
        detach(type: string, listener: Function): void
        unsubscribe(type: string, listener: Function): void
    }
    interface TestRunner extends EventTarget{
        TEST_CASE_BEGIN_EVENT: string
        TEST_CASE_COMPLETE_EVENT: string
        TEST_SUITE_BEGIN_EVENT: string
        TEST_SUITE_COMPLETE_EVENT: string
        TEST_PASS_EVENT: string
        TEST_FAIL_EVENT: string
        ERROR_EVENT: string
        TEST_IGNORE_EVENT: string
        COMPLETE_EVENT: string
        BEGIN_EVENT: string

        getName(): string
        setName(name: string): void

        add(testObject: TestSuite): void
        add(testObject: TestCase): void

        clear(): void
        isWaiting(): boolean
        isRunning(): boolean

        getResults(format?: Function): any //Object|String
        getCoverage(format?: Function): any //Object|String
        callback(...args: any[]): Function
        resume(segment?: Function): void
        run(options?: Object): void
        run(options?: boolean): void
    }
    interface TestSuite{
        name: string
//        items: any[] //Array of test suites and test cases.
        add(testObject: TestSuite): void
        add(testObject: TestCase): void
        setUp(): void
        tearDown(): void
    }
    interface TestCase{
        (template: Object): void
        DEFAULT_WAIT: number
        callback(...args: any[]): Function
        resume(segment?: Function): void
        wait(segment?: Function, delay?: number): void
        waitFor(condition: Function, segment: Function, timeout?: number, increment?: number): void
        assert(condition: boolean, message: string): void
        fail(message?: string): void
        init(): void
        destroy(): void
        setUp(): void
        tearDown(): void
    }
    interface IAssert{
        fail(message?: string)
        pass(message?: string)
        areEqual(expected: Object, actual: Object, message?: string)
        areNotEqual(unexpected: Object, actual: Object, message?: string)
        areNotSame(unexpected: Object, actual: Object, message?: string)
        areSame(expected: Object, actual: Object, message?: string)
        isFalse(actual: Object, message?: string)
        isTrue(actual: Object, message?: string)
        isNaN(actual: Object, message?: string)
        isNotNaN(actual: Object, message?: string)
        isNotNull(actual: Object, message?: string)
        isNotUndefined(actual: Object, message?: string)
        isNull(actual: Object, message?: string)
        isUndefined(actual: Object, message?: string)
        isArray(actual: Object, message?: string)
        isBoolean(actual: Object, message?: string)
        isFunction(actual: Object, message?: string)
        isInstanceOf(expected: Function, actual: Object, message?: string)
        isNumber(actual: Object, message?: string)
        isObject(actual: Object, message?: string)
        isString(actual: Object, message?: string)
        isTypeOf(expectedType: string, actualValue: Object, message?: string)

        throwsError(expectedError: string, method: Object, message?: string): void
        throwsError(expectedError: Function, method: Object, message?: string): void
        throwsError(expectedError: Object, method: Object, message?: string): void
    }
}
