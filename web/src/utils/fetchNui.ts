/**
 * @param eventName - The endpoint event name to target
 * @param data - The data you wish to send in the NUI callback
 * 
 * @return returnData - A promise for the data sent back by the NuiCallbacks CB argument
 */

export async function fetchNui<T = any>(
    eventName: string,
    data: unknown = {}
): Promise<T> {
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
    };

    const resourceName = (window as any).GetParentResourceName
        ? (window as any).GetParentResourceName()
        : "nui-frame-app";

    const resp = await fetch(`https://${resourceName}/${eventName}`, options);

    return await resp.json();
}