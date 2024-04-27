package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sort"
	"strconv"
	"strings"
	"time"
)

type Health struct {
	Status string `json:"status"`
}

type SalesOrdersResponse struct {
	D SalesOrders `json:"d"`
}

type SalesOrderResponse struct {
	D SalesOrder `json:"d"`
}

type SalesOrders struct {
	Results []SalesOrder `json:"results"`
}

type SalesOrderMetadata struct {
	Id   string `json:"id"`
	Uri  string `json:"uri"`
	Type string `json:"type"`
	Etag string `json:"etag"`
}

type SalesOrder struct {
	Metadata                       SalesOrderMetadata `json:"__metadata"`
	SalesOrder                     string
	SalesOrderType                 string
	SalesOrganization              string
	DistributionChannel            string
	OrganizationDivision           string
	SalesGroup                     string
	SalesOffice                    string
	SalesDistrict                  string
	SoldToParty                    string
	CreationDate                   string
	CreatedByUser                  string
	LastChangeDate                 string
	SenderBusinessSystemName       string
	ExternalDocumentID             string
	LastChangeDateTime             string
	ExternalDocLastChangeDateTime  string
	PurchaseOrderByCustomer        string
	PurchaseOrderByShipToParty     string
	CustomerPurchaseOrderType      string
	CustomerPurchaseOrderDate      string
	SalesOrderDate                 string
	TotalNetAmount                 string
	TransactionCurrency            string
	SDDocumentReason               string
	PricingDate                    string
	PriceDetnExchangeRate          string
	RequestedDeliveryDate          string
	ShippingCondition              string
	CompleteDeliveryIsDefined      string
	ShippingType                   string
	HeaderBillingBlockReason       string
	DeliveryBlockReason            string
	DeliveryDateTypeRule           string
	IncotermsClassification        string
	IncotermsTransferLocation      string
	IncotermsLocation1             string
	IncotermsLocation2             string
	IncotermsVersion               string
	CustomerPriceGroup             string
	PriceListType                  string
	CustomerPaymentTerms           string
	PaymentMethod                  string
	FixedValueDate                 string
	AssignmentReference            string
	ReferenceSDDocument            string
	ReferenceSDDocumentCategory    string
	AccountingDocExternalReference string
	CustomerAccountAssignmentGroup string
	AccountingExchangeRate         string
	CustomerGroup                  string
	AdditionalCustomerGroup1       string
	AdditionalCustomerGroup2       string
	AdditionalCustomerGroup3       string
	AdditionalCustomerGroup4       string
	AdditionalCustomerGroup5       string
	SlsDocIsRlvtForProofOfDeliv    string
	CustomerTaxClassification1     string
	CustomerTaxClassification2     string
	CustomerTaxClassification3     string
	CustomerTaxClassification4     string
	CustomerTaxClassification5     string
	CustomerTaxClassification6     string
	CustomerTaxClassification7     string
	CustomerTaxClassification8     string
	CustomerTaxClassification9     string
	TaxDepartureCountry            string
	VATRegistrationCountry         string
	SalesOrderApprovalReason       string
	SalesDocApprovalStatus         string
	OverallSDProcessStatus         string
	TotalCreditCheckStatus         string
	OverallTotalDeliveryStatus     string
	OverallSDDocumentRejectionSts  string
	ToItem                         DeferredReference `json:"to_Item"`
	ToPartner                      DeferredReference `json:"to_Partner"`
	ToPaymentPlanItemDetails       DeferredReference `json:"to_PaymentPlanItemDetails"`
	ToPricingElement               DeferredReference `json:"to_PricingElement"`
	ToText                         DeferredReference `json:"to_Text"`
}

type DeferredReference struct {
	Deferred Ref `json:"__deferred"`
}

type Ref struct {
	Uri string `json:"uri"`
}

var orderCol []SalesOrder = []SalesOrder{
	{
		SalesOrder:                 "9000000152",
		SalesOrderType:             "OR",
		SalesOrganization:          "US1100",
		DistributionChannel:        "01",
		OrganizationDivision:       "01",
		SalesGroup:                 "",
		SalesOffice:                "",
		SalesDistrict:              "7",
		SoldToParty:                "1003766",
		CreationDate:               "02 Jan 23 15:04 MST",
		CreatedByUser:              "LARRY",
		LastChangeDate:             "",
		SalesOrderDate:             "02 Jan 23 15:04 MST",
		TotalNetAmount:             "245.83",
		TransactionCurrency:        "USD",
		PricingDate:                "1/2/2021",
		RequestedDeliveryDate:      "3/31/2021",
		OverallTotalDeliveryStatus: "DELIVERED",
	},
	{
		SalesOrder:                 "9000000158",
		SalesOrderType:             "OR",
		SalesOrganization:          "US1100",
		DistributionChannel:        "01",
		OrganizationDivision:       "01",
		SalesGroup:                 "",
		SalesOffice:                "",
		SalesDistrict:              "",
		SoldToParty:                "1003765",
		CreationDate:               "02 Jan 23 15:04 MST",
		CreatedByUser:              "LARRY",
		LastChangeDate:             "",
		SalesOrderDate:             "02 Jan 23 15:04 MST",
		TotalNetAmount:             "901.36",
		TransactionCurrency:        "USD",
		PricingDate:                "2/11/2021",
		RequestedDeliveryDate:      "7/1/2021",
		OverallTotalDeliveryStatus: "DELIVERED",
	},
	{
		SalesOrder:                 "9000000173",
		SalesOrderType:             "OR",
		SalesOrganization:          "US1100",
		DistributionChannel:        "01",
		OrganizationDivision:       "",
		SalesGroup:                 "",
		SalesOffice:                "",
		SalesDistrict:              "",
		SoldToParty:                "1003765",
		CreationDate:               "02 Jan 23 15:04 MST",
		CreatedByUser:              "LARRY",
		LastChangeDate:             "",
		SalesOrderDate:             "02 Jan 23 15:04 MST",
		TotalNetAmount:             "1180.86",
		TransactionCurrency:        "USD",
		PricingDate:                "12/29/2020",
		RequestedDeliveryDate:      "4/16/2021",
		OverallTotalDeliveryStatus: "DELIVERED",
	},
	{
		SalesOrder:            "9000000253",
		SalesOrderType:        "OR",
		SalesOrganization:     "US1100",
		DistributionChannel:   "01",
		OrganizationDivision:  "00",
		SalesGroup:            "",
		SalesOffice:           "",
		SalesDistrict:         "",
		SoldToParty:           "1003764",
		CreationDate:          "02 Jan 23 15:04 MST",
		CreatedByUser:         "LARRY",
		LastChangeDate:        "",
		SalesOrderDate:        "1/19/2021",
		TotalNetAmount:        "175.75",
		TransactionCurrency:   "USD",
		PricingDate:           "02 Jan 23 15:04 MST",
		RequestedDeliveryDate: "4/21/2021",
	},
	{
		SalesOrder:            "9000000348",
		SalesOrderType:        "OR",
		SalesOrganization:     "US1100",
		DistributionChannel:   "01",
		OrganizationDivision:  "00",
		SalesGroup:            "",
		SalesOffice:           "",
		SalesDistrict:         "",
		SoldToParty:           "1003764",
		CreationDate:          "02 Jan 23 15:04 MST",
		CreatedByUser:         "LARRY",
		LastChangeDate:        "",
		SalesOrderDate:        "02 Jan 23 15:04 MST",
		TotalNetAmount:        "1576.55",
		TransactionCurrency:   "USD",
		PricingDate:           "3/8/2021",
		RequestedDeliveryDate: "8/8/2021",
	},
	{
		SalesOrder:            "9000000363",
		SalesOrderType:        "ZSMP",
		SalesOrganization:     "US1100",
		DistributionChannel:   "01",
		OrganizationDivision:  "00",
		SalesGroup:            "",
		SalesOffice:           "",
		SalesDistrict:         "2",
		SoldToParty:           "1003767",
		CreationDate:          "02 Jan 23 15:04 MST",
		CreatedByUser:         "LARRY",
		LastChangeDate:        "",
		SalesOrderDate:        "02 Jan 23 15:04 MST",
		TotalNetAmount:        "1112.74",
		TransactionCurrency:   "USD",
		PricingDate:           "2/23/2021",
		RequestedDeliveryDate: "5/7/2021",
	},
	{
		SalesOrder:            "9000000364",
		SalesOrderType:        "OR",
		SalesOrganization:     "US1100",
		DistributionChannel:   "01",
		OrganizationDivision:  "00",
		SalesGroup:            "",
		SalesOffice:           "",
		SalesDistrict:         "2",
		SoldToParty:           "1003767",
		CreationDate:          "02 Jan 23 15:04 MST",
		CreatedByUser:         "LARRY",
		LastChangeDate:        "",
		SalesOrderDate:        "02 Jan 23 15:04 MST",
		TotalNetAmount:        "1051.28",
		TransactionCurrency:   "USD",
		PricingDate:           "1/6/2021",
		RequestedDeliveryDate: "7/3/2021",
	},
	{
		SalesOrder:            "9000000043",
		SalesOrderType:        "OR",
		SalesOrganization:     "US1100",
		DistributionChannel:   "01",
		OrganizationDivision:  "00",
		SalesGroup:            "",
		SalesOffice:           "",
		SalesDistrict:         "7",
		SoldToParty:           "1003768",
		CreationDate:          "02 Jan 23 15:04 MST",
		CreatedByUser:         "LARRY",
		LastChangeDate:        "",
		SalesOrderDate:        "02 Jan 23 15:04 MST",
		TotalNetAmount:        "2260.6",
		TransactionCurrency:   "USD",
		PricingDate:           "12/17/2020",
		RequestedDeliveryDate: "2/14/2021",
	},
	{
		SalesOrder:            "9000000232",
		SalesOrderType:        "ZOR",
		SalesOrganization:     "2000",
		DistributionChannel:   "01",
		OrganizationDivision:  "",
		SalesGroup:            "",
		SalesOffice:           "",
		SalesDistrict:         "",
		SoldToParty:           "1003768",
		CreationDate:          "02 Jan 23 15:04 MST",
		CreatedByUser:         "SERGEY",
		LastChangeDate:        "",
		SalesOrderDate:        "02 Jan 23 15:04 MST",
		TotalNetAmount:        "1356.08",
		TransactionCurrency:   "EUR",
		PricingDate:           "3/18/2021",
		RequestedDeliveryDate: "6/10/2021",
	},
	{
		SalesOrder:            "9000000237",
		SalesOrderType:        "ZOR",
		SalesOrganization:     "2000",
		DistributionChannel:   "01",
		OrganizationDivision:  "00",
		SalesGroup:            "",
		SalesOffice:           "",
		SalesDistrict:         "",
		SoldToParty:           "1003768",
		CreationDate:          "02 Jan 23 15:04 MST",
		CreatedByUser:         "SERGEY",
		LastChangeDate:        "",
		SalesOrderDate:        "02 Jan 23 15:04 MST",
		TotalNetAmount:        "81.86",
		TransactionCurrency:   "EUR",
		PricingDate:           "2/8/2021",
		RequestedDeliveryDate: "6/15/2021",
	},
}

func SetResponseDefaults(o *SalesOrdersResponse) {
	for i := 0; i < len(o.D.Results); i++ {
		SetOrderDefaults(&o.D.Results[i], i)
	}
}

func SetSingleResponseDefaults(o *SalesOrderResponse) {
	SetOrderDefaults(&o.D, 0)
}

func SetOrderDefaults(o *SalesOrder, i int) {

	if o.SalesOrderType == "" {
		o.SalesOrderType = "OR"
	}
	if o.SalesOrganization == "" {
		o.SalesOrganization = "1710"
	}
	if o.DistributionChannel == "" {
		o.DistributionChannel = "10"
	}

	if o.SalesOrderDate == "" {
		newDate := time.Now()
		o.SalesOrderDate = newDate.Format(time.RFC822)
		o.CreationDate = newDate.Format(time.RFC822)
	}

	if o.RequestedDeliveryDate == "" {
		tempDate, _ := time.Parse(time.RFC822, o.SalesOrderDate)
		o.RequestedDeliveryDate = tempDate.Add(time.Hour * 24 * 4).Format(time.RFC822)
	}

	if o.CreatedByUser == "" {
		o.CreatedByUser = "WHO_KNOWS"
	}

	if o.TotalNetAmount == "" {
		o.TotalNetAmount = "0.00"
	}

	if i == 0 && o.OverallTotalDeliveryStatus == "" {
		o.OverallTotalDeliveryStatus = "SCHEDULED"
	} else if o.OverallTotalDeliveryStatus == "" {
		o.OverallTotalDeliveryStatus = "FULFILLMENT"
	}

	o.Metadata = SalesOrderMetadata{Id: "https://sap-orders-mock-h7pi7igbcq-ew.a.run.app/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('" + strconv.Itoa(i+1) + "')",
		Uri:  "https://sap-orders-mock-h7pi7igbcq-ew.a.run.app/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('" + strconv.Itoa(i+1) + "')",
		Type: "API_SALES_ORDER_SRV.A_SalesOrderType",
		Etag: "W/\"datetimeoffset'2016-09-02T06%3A15%3A47.1257050Z'\""}

	o.ToItem = DeferredReference{Deferred: Ref{Uri: "https://sap-orders-mock-h7pi7igbcq-ew.a.run.app/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('" + strconv.Itoa(i+1) + "')/to_Item"}}
	o.ToPartner = DeferredReference{Deferred: Ref{Uri: "https://sap-orders-mock-h7pi7igbcq-ew.a.run.app/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('" + strconv.Itoa(i+1) + "')/to_Partner"}}
	o.ToPaymentPlanItemDetails = DeferredReference{Deferred: Ref{Uri: "https://sap-orders-mock-h7pi7igbcq-ew.a.run.app/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('" + strconv.Itoa(i+1) + "')/to_PaymentPlanItemDetails"}}
	o.ToPricingElement = DeferredReference{Deferred: Ref{Uri: "https://sap-orders-mock-h7pi7igbcq-ew.a.run.app/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('" + strconv.Itoa(i+1) + "')/to_PricingElement"}}
	o.ToText = DeferredReference{Deferred: Ref{Uri: "https://sap-orders-mock-h7pi7igbcq-ew.a.run.app/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder('" + strconv.Itoa(i+1) + "')/to_Text"}}
}

func orderHandler(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		filterProp := "none"
		filterValue := "none"

		for k, v := range r.URL.Query() {
			if k == "$filter" {
				log.Println("request filter: " + v[0])
				filterProp = v[0][0:strings.Index(v[0], "eq")]
				log.Println("request filter prop: " + filterProp)
				filterValue = v[0][strings.Index(v[0], "'")+1 : strings.LastIndex(v[0], "'")]
				log.Println("request filter prop value: " + filterValue)
			}
		}

		if filterProp != "none" {
			resp := SalesOrderResponse{}

			for i := 0; i < len(orderCol); i++ {
				if orderCol[i].SalesOrder == filterValue {
					resp.D = orderCol[i]
					SetSingleResponseDefaults(&resp)
					j, _ := json.Marshal(resp)
					w.Header().Set("Content-Type", "application/json")
					w.WriteHeader(http.StatusCreated)
					w.Write(j)

					break
				}
			}
		} else {
			resp := SalesOrdersResponse{D: SalesOrders{Results: orderCol}}
			SetResponseDefaults(&resp)
			j, _ := json.Marshal(resp)
			w.Header().Set("Content-Type", "application/json")
			w.Write(j)
		}
	case "POST":
		d := json.NewDecoder(r.Body)
		p := &SalesOrder{}
		err := d.Decode(p)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		if p.SalesOrderDate == "" {
			newDate := time.Now()
			p.SalesOrderDate = newDate.Format(time.RFC822)
			p.CreationDate = newDate.Format(time.RFC822)
		}
		if p.OverallTotalDeliveryStatus == "" {
			p.OverallTotalDeliveryStatus = "SCHEDULED"
		}
		orderCol = append(orderCol, *p)

		resp := SalesOrderResponse{D: *p}
		SetSingleResponseDefaults(&resp)

		// Do new sort
		sort.Slice(orderCol, func(i, j int) bool {
			myDate1, _ := time.Parse(time.RFC822, orderCol[i].SalesOrderDate)
			myDate2, _ := time.Parse(time.RFC822, orderCol[j].SalesOrderDate)
			return myDate1.After(myDate2)
		})

		j, _ := json.Marshal(resp)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		w.Write(j)
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
		fmt.Fprintf(w, "I can't do that.")
	}
}

func healthHandler(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		resp := Health{Status: "Ok"}
		j, _ := json.Marshal(resp)
		w.Header().Set("Content-Type", "application/json")
		w.Write(j)
	}
}

func main() {

	// Do initial sorting of orders
	sort.Slice(orderCol, func(i, j int) bool {
		myDate1, _ := time.Parse(time.RFC822, orderCol[i].SalesOrderDate)
		myDate2, _ := time.Parse(time.RFC822, orderCol[j].SalesOrderDate)
		return myDate1.After(myDate2)
	})

	http.HandleFunc("/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder", orderHandler)
	http.HandleFunc("/", healthHandler)

	log.Println("Go!")
	http.ListenAndServe(":8080", nil)
}
