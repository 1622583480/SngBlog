import request from "@/utils/request"
export function getTest1() {
    return request({
        url: "/test1",
        method: "get"
    })
}