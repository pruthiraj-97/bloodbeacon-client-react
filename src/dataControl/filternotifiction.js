export function filterNotification(notifications,id) {
    let newNotification=[]
    newNotification=notifications.filter((request)=>{
            return request._id!=id
    })
    return newNotification
 }