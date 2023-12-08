import { objectUtilities } from '../object'

const { pick } = objectUtilities()

type HTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

function pickBaseProps<TProps extends HTMLProps, TKeys extends keyof TProps = keyof TProps>(obj: TProps, ...keys: TKeys[]): Pick<TProps, TKeys> {
    return pick<TProps>(obj, 'id', 'style', ...keys)
}

function makeClassname(externalClassname: string | undefined, ...classNames: (string | boolean | null | undefined)[]): HTMLProps['className'] {
    if (externalClassname === undefined && classNames?.length === 0) return undefined
    
    const classNameArray = []
    
    if (classNames.length !== 0) classNameArray.push(
        classNames.filter(item => typeof item === 'string').map(item => (item as string).trim()).join(' ')
        )
    if (externalClassname !== undefined) classNameArray.push(externalClassname.trim())

    return classNameArray.join(' ')
}

export { makeClassname, pickBaseProps }