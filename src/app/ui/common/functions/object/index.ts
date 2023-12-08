
type Obj<Values = any> = Record<string, Values>
type Keys<TObj extends Obj> = keyof TObj


type IPickFnResult<TObj extends Obj = Obj, Fields extends Keys<TObj> = Keys<TObj>> = Pick<TObj, Fields> 
type IOmitFnResult<TObj extends Obj = Obj, Fields extends Keys<TObj> = Keys<TObj>> = Omit<TObj, Fields> 

/**
 * Main Array Utility
 */

interface IObjectUtilitiesResult {
    pick<TObj extends Obj, TKeys extends Keys<TObj> = Keys<TObj>>(object: TObj, ...keys: TKeys[]): IPickFnResult<TObj, TKeys>
    omit<TObj extends Obj, TKeys extends Keys<TObj> = Keys<TObj>>(object: TObj, ...keys: TKeys[]): IOmitFnResult<TObj, TKeys>
}

const objectUtilities = (function(): IObjectUtilitiesResult {
    function pick<TObj extends Obj, TKeys extends Keys<TObj> = Keys<TObj>>(object: TObj, ...keys: TKeys[]): IPickFnResult<TObj, TKeys> {
        const result: Partial<TObj> = {}
        for(const key of keys) {
            result[key] = object[key]
        }
        return result as IPickFnResult<TObj, TKeys>
    }
    
    function omit<TObj extends Obj, TKeys extends Keys<TObj> = Keys<TObj>>(object: TObj, ...keys: TKeys[]): IOmitFnResult<TObj, TKeys> {
        const result: Partial<TObj> = {}
        for(const key of Object.keys(object) as TKeys[]) {
            if (!keys.includes(key)) result[key] = object[key]
        }
        return result as IOmitFnResult<TObj, TKeys>
    }

    return {
        pick,
        omit
    }
})

export { objectUtilities }