/* 限制数字类型的范围 */
type enumitre<T extends number, R extends number[] = []> = R['length'] extends T
    ? R[number] | R['length']
    : enumitre<T, [...R, R['length']]>;
export type RangeNumber<T extends number, L extends number> = Exclude<enumitre<L>, enumitre<T>> | T;


export interface Point {
    x: number;
    y: number;
}