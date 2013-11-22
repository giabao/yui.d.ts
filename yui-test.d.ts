// Type definitions for yui 3.14.0
// Project: https://github.com/yui/yui3/blob/release-3.14.0/src/test/js
// Definitions by:
// Gia Bảo @ Sân Đình <https://github.com/giabao>

declare module YUITest {
    interface YUITestStatic{
        Assert: IAssert
        Case: TestCase
    }
    interface TestCase{
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
