mos = {
    "objectName": "ADDRESS",
    "className": "psdi.app.site.AddressSet",
    "description": "List of addresses for organization",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ADDRESSID",
    "primaryKeyColumns": [
        "ORGID",
        "ADDRESSCODE"
    ],
    "logicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "BILLTOSHIPTO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, ADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To / Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "AUTHORGID, BILLTO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "CONTRACTAUTH",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTOADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SERVICEADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTOADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "MR",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSON",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "LOCATIONORG, BILLTOADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSON",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "LOCATIONORG, SHIPTOADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "LOCATIONORG, BILLTOADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "LOCATIONORG, SHIPTOADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "USEFORORG, BILLTOADDRESS",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "USEFORORG, SHIPTOADDRESS",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Where to send the PO Bill",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BUYERCOMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchasing Agent that will do the buying.",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PO",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shipping Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "POLINE",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PR",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "PR",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "REORDERPAD",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BUYERCOMPANY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Buyer Company Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, REPLYTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reply To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "RFQ",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "SHIPMENT",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Bill To Address",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "SHIPMENT",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Ship To Address",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "ADDRESS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ADDRESS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ADDRESS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ADDRESSCODE",
            "required": true,
            "persistent": true,
            "title": "Address Code",
            "remarks": "Identifies an address with a code value, for example, NASHUA for an organization's Nashua, NH address. The value must be unique for all address codes. You define address codes at the organization level for each address you plan to integrate into your MAXIMO implementation. Typically, you have one or more addresses for each site. When you create a site you can specify the default ship to and bill to address by selecting an address code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the address code, for example, Nashua, New Hampshire main office.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS1",
            "required": false,
            "persistent": true,
            "title": "Address",
            "remarks": "First line of the address, typically the street address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS2",
            "required": false,
            "persistent": true,
            "title": "City",
            "remarks": "Second line of the address, typically the city.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS3",
            "required": false,
            "persistent": true,
            "title": "State/Province",
            "remarks": "Third line of the address, typically the State or Province.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS4",
            "required": false,
            "persistent": true,
            "title": "ZIP/Postal Code",
            "remarks": "Postal code for the address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESS5",
            "required": false,
            "persistent": true,
            "title": "Country",
            "remarks": "Country of the address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User name who last changed record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Date/Time Record was last modified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of address code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRESSID",
            "required": true,
            "persistent": true,
            "title": "ADDRESSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 1",
            "remarks": "Identifies the tax code of the address where the goods on the current record are to be received. You use the tax code for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 2",
            "remarks": "Identifies the tax code of the address where the goods on the current record are to be received. You use the tax code for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 3",
            "remarks": "Identifies the tax code of the address where the goods on the current record are to be received. You use the tax code for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 4",
            "remarks": "Identifies the tax code of the address where the goods on the current record are to be received. You use the tax code for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": true,
            "title": "Tax Code 5",
            "remarks": "Identifies the tax code of the address where the goods on the current record are to be received. You use the tax code for tax calculation.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from ADDRESS.",
            "whereClause": "ldkey=:addressid and ldownertable = 'ADDRESS'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ADDRESS",
            "source": "BILLTOSHIPTO",
            "remarks": "Relationship to the address table, used to find the address record for an address within an organization.(billtoshipto.addresscode = address.addresscode and billtoshipto.orgid = address.orgid). The resulting set will contain zero or one object.",
            "whereClause": "addresscode=:addresscode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "BILLTO",
            "source": "CONTRACTAUTH",
            "remarks": "Relationship to the Address table, used to find all Address records for a given ContractAuth.(contractauth.billto=address.addresscode). The resulting set will contain one record.",
            "whereClause": "addresscode = :billto and orgid=:authorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESS",
            "source": "LABOR",
            "remarks": "Relationship to the Address table. Used to find out Company specified by the ShipToLocation attribute. (Address.addresscode=Labor.shiptolocation). The resultset will contain at most 1 object.",
            "whereClause": "addresscode = :shiptolocation and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESSBILLTO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Address table, used to find the location's default bill to address. (address.addresscode = locations.billtoaddresscode). This relationship will find zero or one object.",
            "whereClause": "addresscode = :billtoaddresscode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESSSHIPTO",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Address table, used to find the location's default ship to address. (address.addresscode = locations.shiptoaddresscode). This relationship will find zero or one object.",
            "whereClause": "addresscode = :shiptoaddresscode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESS",
            "source": "MR",
            "remarks": "Relationship to the Address table , used to find all ship to records for a given material requisition. (address.addresscode = mr.shipto). The resulting set will contain zero or more objects.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the Address table, used to find all address records for a given organization. (organization.orgid = address.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTOADDRESS",
            "source": "PERSON",
            "remarks": "Relationship to the address table.  Used to find the address whose addresscode is contained in this persons billtoaddress.  (address.addresscode=person.billtoaddress).  The resulting set will return zero or one object.",
            "whereClause": "addresscode=:billtoaddress and orgid=:locationorg",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOADDRESS",
            "source": "PERSON",
            "remarks": "Relationship to the address table.  Used to find the address whose addresscode is contained in this persons shiptoaddress. (address.addresscode=person.shiptoaddress).  The resulting set will return zero or one object.",
            "whereClause": "addresscode=:shiptoaddress and orgid=:locationorg",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTO",
            "source": "PO",
            "remarks": "Relationship to the Address table, used to find all bill to address records for a given purchase order. (address.addresscode = po.billto). The resulting set will contain one object.",
            "whereClause": "addresscode = :billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTO",
            "source": "PO",
            "remarks": "Relationship to the Address table, used to find all ship to address records for a given purchase order. (address.addresscode = po.shipto). The resulting set will contain one object.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRBILLTO",
            "source": "PR",
            "remarks": "Relationship to the Address table, used to find all bill to address records for a given purchase requisition. (address.addresscode = pr.billto). The resulting set will contain one object.",
            "whereClause": "addresscode = :billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRSHIPTO",
            "source": "PR",
            "remarks": "Relationship to the Address table, used to find all ship to address records for a given purchase requisition. (address.addresscode = pr.shipto). The resulting set will contain one object.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BILLTO",
            "source": "RFQ",
            "remarks": "Relationship to the Address table, used to find all bill to address records for a given request for quotation. (address.addresscode = rfq.billto). The resulting set will contain one object.",
            "whereClause": "addresscode = :billto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPLYTOADDRESS",
            "source": "RFQ",
            "remarks": "Relationship to the Address table, used to find all reply to address records for a given request for quotation. (address.addresscode = rfq.replyto).  The resulting set will contain one object.",
            "whereClause": "addresscode = :replyto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHIPTOADDRESS",
            "source": "RFQ",
            "remarks": "Relationship to the Address table, used to find all ship to address records for a given request for quotation. (address.addresscode = rfq.shipto). The resulting set will contain one object.",
            "whereClause": "addresscode = :shipto and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESSBILLTO",
            "source": "SITE",
            "remarks": "Relationship to the Address table, used to find the site's default bill to address. (address.orgid = site.orgid and address.addresscode = site.billtoaddresscode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and addresscode = :billtoaddresscode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESSSHIPTO",
            "source": "SITE",
            "remarks": "Relationship to the Address table, used to find the site's default ship to address. (address.orgid = site.orgid and address.addresscode = site.shiptoaddresscode). This relationship will find zero or one object.",
            "whereClause": "orgid = :orgid and addresscode = :shiptoaddresscode",
            "cardinality": "UNDEFINED"
        }
    ]
}