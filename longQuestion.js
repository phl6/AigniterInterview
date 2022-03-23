"use strict";

//array of districts
const districtRanks = [
    '05',
    '06',
    '02',
    '03',
    '04',
    '01',
    '08',
    '07',
    '09',
    '10'
];

// array of shipments which types are 'walker'
const walkerShipments = [
    {
        shipmentId: "68a4d32b-5e9a-423c-a880-63166a5171ef",
        type: 'walker',
        district: '05'
    },
    {
        shipmentId: "442814da-0c1c-4be3-9cf5-600804146952",
        type: 'walker',
        district: '02'
    },
    {
        shipmentId: "c26b4e72-47e7-4018-bfc6-dd6a8adba7ca",
        type: 'walker',
        district: '08'
    }
];

// array of shipments which types are 'pickUpStore'
const pickUpStore = [
    {   
        shipmentId: "79175742-d457-4adb-9258-adbfadd2cbf8",
        type: 'pickUpStore',
        district: '05'
    },
    {
        shipmentId: "15a9f676-6afc-473a-b315-ceddb93ad1ca",
        type: 'pickUpStore',
        district: '02'
    },   
    {
        shipmentId: "bb21801a-aafa-432d-99a4-444eade9b8fe",
        type: 'pickUpStore',
        district: '09'
    },
    {
        shipmentId: "356d9842-92e6-4c43-9790-bc03855397f0",
        type: 'pickUpStore',
        district: '04'
    }
];

// array of shipments which types are 'courier'
const courier = [
    {
        shipmentId: "39e648e8-64c4-4ab9-8d61-aa11a2751ac0",
        type: 'courier',
        district: '02'
    },
    {
        shipmentId: "82d67fc8-e529-4c35-91c9-b54fac6a1deb",
        type: 'courier',
        district: '01'
    },
    {
        shipmentId: "b8105a62-a901-42f0-a51f-67c34c1b1206",
        type: 'courier',
        district: '09'
    },
    {
        shipmentId: "464cd05b-3e23-4a1b-8c28-0253bfa9b53f",
        type: 'courier',
        district: '10'
    },
    {
        shipmentId: "26b0e7c3-73ce-4067-be62-b98461fd61a8",
        type: 'courier',
        district: '06'
    },
    {
        shipmentId: "10b9846d-fb60-4279-8783-2a585c35c88a",
        type: 'courier',
        district: '07'
    },
    {
        shipmentId: "c8b71aae-f182-44ea-b415-eed48f2d50a8",
        type: "courier",
        district: "11",
    },
];

function groupByDistrict(allShipments, district) {
    return allShipments.reduce((accumulator, currentValue) => {
        (accumulator[currentValue[district]] = accumulator[currentValue[district]] || []).push(currentValue);
        return accumulator;
    }, {});
};

function filterDistrictRanks(districtRanks, shipment){
    return shipment.filter(ship => districtRanks.includes(ship.district));
}

function sortByShipmentType(){}


function shipmentSorting(districtRanks, walkerShipments, pickUpStoreShipments, courierShipments) {
    const result = [];
    //rule 3, filter shipments that don't exist in districtRanks 
    walkerShipments = filterDistrictRanks(districtRanks, walkerShipments);
    pickUpStoreShipments = filterDistrictRanks(districtRanks, pickUpStoreShipments);
    courierShipments = filterDistrictRanks(districtRanks, courierShipments);
    const combinedShipments = [...walkerShipments, ...pickUpStoreShipments, ...courierShipments];
    // const groupDistrictShipments = groupByDistrict(combinedShipments, 'district');


    return result;
}

const sorted = shipmentSorting(districtRanks, walkerShipments, pickUpStore, courier);



