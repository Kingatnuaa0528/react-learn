export const PLUS='PLUS';
export const MINUS='MINUS';

export function plusActionCreator() {
    console.log("plusActionCreator");
    return {
        type: PLUS
    }
}

export function minusActionCreator() {
    console.log("minusActionCreator");
    return {
        type: MINUS
    }
}