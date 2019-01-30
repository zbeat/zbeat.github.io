mos = {
    "objectName": "ADMINMONITOR",
    "className": "psdi.app.configure.virtual.AdminMonitorSet",
    "description": "Non-persistent table for monitoring Admin Mode",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status of the Admin Mode change process",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PROCESSMONITOR"
        },
        {
            "attributeName": "CONFIRM",
            "required": true,
            "persistent": false,
            "title": "Confirm",
            "remarks": "Multiuse confirmation checkbox",
            "sameAsAttribute": "CONFIRM",
            "sameAsObject": "PROCESSMONITOR"
        },
        {
            "attributeName": "LOGOUTMIN",
            "required": true,
            "persistent": false,
            "title": "Number of Minutes for User Logout",
            "remarks": "Maintain property mxe.adminmode.logoutmin",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMSESSIONS",
            "required": true,
            "persistent": false,
            "title": "Number of Administrative Sessions Allowed",
            "remarks": "Number of administrative sessions allowed during Admin Mode",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLETIONSTATUS",
            "required": false,
            "persistent": false,
            "title": "CompletionStatus",
            "remarks": "The completion status of the job (1=running, 2=completed successfully, 3=completed with error).  Static variables are in ProcessMonitorSetRemote.",
            "sameAsAttribute": "COMPLETIONSTATUS",
            "sameAsObject": "PROCESSMONITOR"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}