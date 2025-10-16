/* variables */
var step = 1;
var scale = 0.1;
var per_Panel_width = 900; // 900mm – per mm 0.17px = 900 x 0.17 = 153px
var per_Panel_minWidth = 200;
var per_Panel_height = 3000; // 3000mm – per mm 0.12px = 3000 x 0.12 = 360px;
var file_path = window.location.protocol == "file:" ? "assets/image/":"/assets/image/";

var panelFrameColors = [
    {
        "name": "Wit",
        "colors": [
            {"hex": "#E9E0D2", "name": "Crémewit", "ral": "RAL 9001", "price": 0},
            {"hex": "#D6D5CB", "name": "Grijswit", "ral": "RAL 9002", "price": 105},
            {"hex": "#ECECE7", "name": "Signaalwit", "ral": "RAL 9003", "price": 110},
            {"hex": "#F1EDE1", "name": "Zuiverwit", "ral": "RAL 9010", "price": 115},
            {"hex": "#F8F2E1", "name": "Ultrareine zone wit", "ral": "RAL 9012", "price": 120},
            {"hex": "#F1F1EA", "name": "Verkeerswit", "ral": "RAL 9016", "price": 125}
        ]
    },
    {
        "name": "Zwart",
        "colors": [
            {"hex": "#000000", "name": "True Black", "ral": "RAL 9005", "price": 0},
            {"hex": "#0A0A0A", "name": "Obsidian Black", "ral": "RAL 9006", "price": 135},
            {"hex": "#1C1C1C", "name": "Carbon Shadow", "ral": "RAL 9007", "price": 140},
            {"hex": "#2B2B2B", "name": "Graphite Night", "ral": "RAL 9008", "price": 145},
            {"hex": "#3D3D3D", "name": "Ash Black", "ral": "RAL 9009", "price": 150},
            {"hex": "#4F4F4F", "name": "Slate Black", "ral": "RAL 9010", "price": 155},
            {"hex": "#5A5A5A", "name": "Smoke Charcoal", "ral": "RAL 9011", "price": 160},
            {"hex": "#6E6E6E", "name": "Iron Dust", "ral": "RAL 9012", "price": 165},
            {"hex": "#1A1A1A", "name": "Midnight Steel", "ral": "RAL 9013", "price": 170},
            {"hex": "#121212", "name": "Deep Void", "ral": "RAL 9014", "price": 175}
        ]
    },
    {
        "name": "Grijs",
        "colors": [
            {"hex": "#808080", "name": "Classic Gray", "ral": "RAL 7000", "price": 100},
            {"hex": "#A9A9A9", "name": "Dark Gray", "ral": "RAL 7001", "price": 105},
            {"hex": "#C0C0C0", "name": "Silver Mist", "ral": "RAL 7002", "price": 110},
            {"hex": "#D3D3D3", "name": "Light Gray", "ral": "RAL 7003", "price": 115},
            {"hex": "#B0B0B0", "name": "Concrete Dust", "ral": "RAL 7004", "price": 120},
            {"hex": "#999999", "name": "Industrial Smoke", "ral": "RAL 7005", "price": 125},
            {"hex": "#696969", "name": "Dim Gray", "ral": "RAL 7006", "price": 130},
            {"hex": "#585858", "name": "Shadow Steel", "ral": "RAL 7007", "price": 135},
            {"hex": "#E0E0E0", "name": "Fog Gray", "ral": "RAL 7008", "price": 140},
            {"hex": "#F5F5F5", "name": "Cloud Gray", "ral": "RAL 7009", "price": 145}
        ]
    },
    {
        "name": "Bruin",
        "colors": [
            {"hex": "#8B4513", "name": "Saddle Brown", "ral": "RAL 8002", "price": 100},
            {"hex": "#A52A2A", "name": "Brown", "ral": "RAL 8011", "price": 105},
            {"hex": "#D2691E", "name": "Chocolate", "ral": "RAL 8003", "price": 110},
            {"hex": "#CD853F", "name": "Peru", "ral": "RAL 8004", "price": 115},
            {"hex": "#F4A460", "name": "Sandy Brown", "ral": "RAL 8007", "price": 120},
            {"hex": "#D2B48C", "name": "Tan", "ral": "RAL 1001", "price": 125},
            {"hex": "#BC8F8F", "name": "Rosy Brown", "ral": "RAL 8009", "price": 130},
            {"hex": "#DEB887", "name": "Burlywood", "ral": "RAL 1011", "price": 135},
            {"hex": "#3E2723", "name": "Dark Brown", "ral": "RAL 8017", "price": 140},
            {"hex": "#8B3A3A", "name": "Firebrick Brown", "ral": "RAL 8018", "price": 145}
        ]
    },
    {
        "name": "Blauw",
        "colors": [
            {"hex": "#0000FF", "name": "Blue", "ral": "RAL 5005", "price": 100},
            {"hex": "#1E90FF", "name": "Dodger Blue", "ral": "RAL 5012", "price": 105},
            {"hex": "#4169E1", "name": "Royal Blue", "ral": "RAL 5007", "price": 110},
            {"hex": "#6495ED", "name": "Cornflower Blue", "ral": "RAL 5015", "price": 115},
            {"hex": "#00BFFF", "name": "Deep Sky Blue", "ral": "Custom-Blue-01", "price": 120},
            {"hex": "#4682B4", "name": "Steel Blue", "ral": "RAL 5011", "price": 125},
            {"hex": "#5F9EA0", "name": "Cadet Blue", "ral": "Custom-Blue-02", "price": 130},
            {"hex": "#ADD8E6", "name": "Light Blue", "ral": "Custom-Blue-03", "price": 135},
            {"hex": "#00008B", "name": "Dark Blue", "ral": "RAL 5000", "price": 140},
            {"hex": "#191970", "name": "Midnight Blue", "ral": "Custom-Blue-04", "price": 145}
        ]
    },
    {
        "name": "Rood",
        "colors": [
            {"hex": "#FF0000", "name": "Pure Red", "ral": "RAL 3020", "price": 0},
            {"hex": "#D10000", "name": "Crimson Blaze", "ral": "RAL 3000", "price": 105},
            {"hex": "#B22222", "name": "Firebrick Red", "ral": "RAL 3002", "price": 110},
            {"hex": "#DC143C", "name": "Crimson Flame", "ral": "RAL 3018", "price": 115},
            {"hex": "#E34234", "name": "Vermilion Heat", "ral": "RAL 2002", "price": 120},
            {"hex": "#C41E3A", "name": "Cardinal Red", "ral": "RAL 3003", "price": 125},
            {"hex": "#8B0000", "name": "Dark Ruby", "ral": "RAL 3004", "price": 130},
            {"hex": "#FF4C4C", "name": "Soft Scarlet", "ral": "Custom-Red-01", "price": 135},
            {"hex": "#FF6347", "name": "Tomato Tint", "ral": "Custom-Red-02", "price": 140},
            {"hex": "#FFA07A", "name": "Light Salmon Red", "ral": "Custom-Red-03", "price": 145}
        ]
    },
    {
        "name": "Groen",
        "colors": [
            {"hex": "#008000", "name": "Pure Green", "ral": "RAL 6000", "price": 0},
            {"hex": "#006400", "name": "Dark Forest", "ral": "Custom-Green-01", "price": 105},
            {"hex": "#32CD32", "name": "Lime Green", "ral": "Custom-Green-02", "price": 110},
            {"hex": "#00FF00", "name": "Neon Green", "ral": "Custom-Green-03", "price": 115},
            {"hex": "#228B22", "name": "Forest Green", "ral": "Custom-Green-04", "price": 120},
            {"hex": "#ADFF2F", "name": "Green Yellow", "ral": "Custom-Green-05", "price": 125},
            {"hex": "#7CFC00", "name": "Lawn Green", "ral": "Custom-Green-06", "price": 130},
            {"hex": "#9ACD32", "name": "Yellow Green", "ral": "Custom-Green-07", "price": 135},
            {"hex": "#6B8E23", "name": "Olive Drab", "ral": "Custom-Green-08", "price": 140},
            {"hex": "#556B2F", "name": "Dark Olive Green", "ral": "Custom-Green-09", "price": 145}
        ]
    },
    {
        "name": "Geel",
        "colors": [
            {"hex": "#FFFF00", "name": "Yellow", "ral": "RAL 1023", "price": 0},
            {"hex": "#FFD700", "name": "Gold", "ral": "RAL 1032", "price": 105},
            {"hex": "#F0E68C", "name": "Khaki", "ral": "Custom-Yellow-01", "price": 110},
            {"hex": "#FFFACD", "name": "Lemon Chiffon", "ral": "Custom-Yellow-02", "price": 115},
            {"hex": "#FFFFE0", "name": "Light Yellow", "ral": "Custom-Yellow-03", "price": 120},
            {"hex": "#FFEB3B", "name": "Yellow Bright", "ral": "Custom-Yellow-04", "price": 125},
            {"hex": "#F9A825", "name": "Mustard", "ral": "RAL 1005", "price": 130},
            {"hex": "#FFCC00", "name": "Amber", "ral": "Custom-Yellow-05", "price": 135},
            {"hex": "#FFB300", "name": "Goldenrod", "ral": "Custom-Yellow-06", "price": 140},
            {"hex": "#F2C300", "name": "Daffodil Yellow", "ral": "Custom-Yellow-07", "price": 145}
        ]
    }
];

/* components */
function ErrorSpan(text = ""){
    return `<span class="error-span text-danger d-block w-100">${text}</span>`
}
function Cartitem(data){
    var billOfMaterial_HTML = "";
    var billOfMaterial_items = "";
    var grandTotal = 0;
    if(data.billOfMaterials.length > 0){
        data.billOfMaterials.forEach(function(item){
            grandTotal = grandTotal + Number(item.subtotal);
            billOfMaterial_items += `<tr>
                <td>${item.item}</td>
                <td class="text-center">${item.length}</td>
                <td class="text-center">${item.basis}</td>
                <td class="text-center">${item.qty}</td>
                <td class="text-center">€${item.unitprice.toLocaleString('en-US')}</td>
                <td class="text-end">€${item.subtotal.toLocaleString('en-US')}</td>
            </tr>`;
        });
        billOfMaterial_HTML = `<div class="row mb-3 mt-4">
            <div class="col-md-12">
                <h5>Bill of Materials (Materials Only)</h5>
            </div>
            <div class="col-md-12">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="">Items</th>
                            <th class="text-center">Length</th>
                            <th class="text-center">Basis</th>
                            <th class="text-center">Qty</th>
                            <th class="text-center">Units</th>
                            <th class="text-end">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>${billOfMaterial_items}</tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" class="text-end fw-bold">Grand Total</td>
                            <td colspan="1" class="text-end fw-bold">${grandTotal > 0 ? "€"+grandTotal.toLocaleString('en-US'):""}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>`;
    }

    return `<div class="d-flex w-100 cart-item border border-start-0 border-end-0 border-bottom-0 border-top-1 pt-4 pb-4" data-id="${data.id}">
        <div class="col-lg-2 col-md-2 col-sm-12 d-flex align-items-start justify-content-center">
            <img src="${data.framephoto != "" ? data.framephoto : file_path+"no-img.png"}" alt="no-img" class="img-fluid w-75 mx-auto" />
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12 pe-3">
            <div class="row mb-3">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 class="h5 fw-bold">${data.walltype}</h4>
                    <label class="fs-6">${data.wallwidth}mm x ${data.walllength}mm</label>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Glassoort:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.glasstype}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Deurunits:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.doorunits}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Draairichting:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.directionofrotation}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Valdorpel:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.doorsill}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Slot:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.lock}</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Deurkruk:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.doorhandle}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Kozijnkleur:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.framecolor}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Afwerking:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.finishcolor}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Inmeten:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.measuring}</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start w-100 mb-1">
                        <div class="col-lg-4 col-md-4 col-4">
                            <label class="fs-6 fw-bold">Bezorging:</label>
                        </div>
                        <div class="col-lg-8 col-md-7 col-7">
                            <span>${data.delivery}</span>
                        </div>
                    </div>
                </div>
            </div>
            ${billOfMaterial_HTML}
            <div class="row mb-3">
                <div class="col-lg-12 col-md-12 col-12 px-1">
                    <button type="button" class="d-flex align-items-center btn p-1 text text-orange">Details inklappen <span class="material-icons">remove</span> </button>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <span class="qty-field border border-secondary rounded-3">
                    <span class="btn sub-qty d-flex align-items-center justify-content-center p-0">
                        <span class="material-icons">remove</span>
                    </span>
                    <input type="number" class="d-block no-updown-arrow qty-input-field border-0 text-center" value="${data.framequantity}" min="0" />
                    <span class="btn plus-qty d-flex align-items-center justify-content-center p-0">
                        <span class="material-icons">add</span>
                    </span>
                </span>
                <span class="text text-dark fs-4 fw-bold">€${data.frametotal}</span>
            </div>
        </div>
    </div>`;
}
function PanelColorAccorItem(accorId = "accordionExample", heading = "Accor Heading", listItem = ""){
    var randomId = Math.random().toString(36).substr(2, 8);
    return `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${randomId}">
            <button class="accordion-button collapsed accordion-button p-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${randomId}" aria-expanded="true" aria-controls="collapse${randomId}">
                ${heading} <span class="material-icons arrow">expand_more</span>
            </button>
        </h2>
        <div id="collapse${randomId}" class="accordion-collapse collapse" aria-labelledby="heading${randomId}" data-bs-parent="#${accorId}">
            <div class="accordion-body">
                <ul class="list-group">${listItem}</ul>
            </div>
        </div>
    </div>`;
}
function PanelColorListItem(color = "#000", name = "Black Color", ral = "0001", price = 0){
    return `<li class="list-group-item panel-frame-color d-flex align-items-center justify-content-between fs-6 gap-3" data-id="${btoa(color+""+name+""+ral)}" data-color="${color}" data-label="${name+" "+ral}" data-price="${price}">
        <span class="d-flex align-items-center justify-content-between w-100 gap-1">
            <span class="d-flex align-items-center w-100 gap-3">
                <span style="background: ${color};height: 16px;width: 32px;" class="d-inline-block rounded-pill"></span>
                <span class="d-flex align-items-center gap-2">
                    <span class="text-dark text-capitalize">${name}</span>
                    <span class="text text-uppercase" style="color: #999999;font-size: 14px;">${ral}</span>
                </span>
            </span>
            <span class="text text-orange price" style="font-size: 14px;">€${price}</span>
        </span>
        <span class="material-icons text-orange fs-5 active-icon">check_circle</span>
    </li>`;
}
function defaultColorPill(x){
    return `<span class="d-flex align-items-center gap-2 border border-2 p-1 px-2 bg-white color-pill ${ x.type != undefined && x.type == "custom" ? `custom` : "" }" data-id="${btoa(x.hex+""+x.name+""+x.ral)}">
        <span style="background: ${x.hex};height: 30px;width: 32px;" class="d-inline-block rounded-2"></span>
        <span class="d-flex flex-column align-items-start gap-0">
            <span class=" text-dark text-capitalize ">${x.name}</span>
            <span class="text-sm text-uppercase" style="color: #999999;font-size: 12px;margin-top: -5px;">${x.ral}</span>
        </span>
    </span>`;
}
function GlassPanel(){
    return `<div class="glass-item">
        <span class="support-block"></span>
        <img src="${file_path}volume-off.svg" class="sound-proof img-fluid" />
    </div>`;
}
function GlassDoor(){
    return `<div class="door"><div class="door-glass">
        <span class="door-handle">
            <img src="${file_path}standard_door-handle.svg" />
        </span>
    </div><div class="door-spacing"></div></div>`;
}

/* functions */
function formValidation(formNode = null, onlyClear = false){
    $(".error-span").remove();
    $(formNode+" .field").removeClass("border-danger");
    $(".design-frame-wrapper").removeClass("blur");

    if(onlyClear == false){
        $(formNode+" .field").each(function(){
            var that = $(this);
            var required = that.attr("required");
            var max = that.attr("max");
            var min = that.attr("min");
            if(required != undefined){
                /* input validation */
                if(that.prop("tagName").toLowerCase() == "input"){
                    if(that.attr("type") == "text" || that.attr("type") == "number"){
                        if(that.val() == ""){
                            that.addClass("border-danger");
                            that.after(ErrorSpan("Field is empty!"));
                        } else{
                            if(min != undefined && Number(that.val()) < Number(min)){
                                that.addClass("border-danger");
                                that.after(ErrorSpan(`Value must be greater min ${min} value`));
                            }
                            if(max != undefined && Number(that.val()) > Number(max)){
                                that.addClass("border-danger");
                                that.after(ErrorSpan(`Value must be less than max ${max} value`));
                            }
                        }
                    }
                }
                else if(that.prop("tagName").toLowerCase() == "div"){
                    if(that.attr("data-type") == "radio"){
                        if(that.find('input[name='+that.attr("data-name")+']:checked').length == 0){
                            that.addClass("border-danger");
                            that.append(ErrorSpan("field is required"));
                        }
                    }
                }
            }

        });
        var validateStatus = $(formNode+" .error-span").length > 0 ? false : true;

        if(!validateStatus){
            $(".design-frame-wrapper").addClass("blur");
        }
        return validateStatus;
    }

}
function validate_nextstep_BTN(){
    /* current step next button */
    $(".next-step-btn").attr("disabled",true);
    if(formValidation(".step.step-"+step)){
        $(".next-step-btn").removeAttr("disabled");
    }
}
function disabledEnabledDoorunitAndOtherMaterials(){
    if(junctionCount() <= 0){
        $(".radio-check-field[data-name=junction]").removeAttr("required");
        $(".radio-check-field[data-name=supportblock]").removeAttr("required");
        $(".junction-field, .supportblock-field").prop("disabled",true);
        $(".junction-field, .supportblock-field").prop("checked",false).change();
    }
    if(junctionCount() > 0){
        $(".radio-check-field[data-name=junction]").attr("required",true);
        $(".radio-check-field[data-name=supportblock]").attr("required",true);
        $(".junction-field, .supportblock-field").removeAttr("disabled");
    }

    $(".doorunits-field").each(function(){
        $(this).removeAttr("disabled");
        if(Number($(this).attr("data-singledoormin")) > Number($(".wall-width-field").val())){
            if(Number($(this).val()) > 0 ){
                $(this).prop("disabled",true);
            }
        }
    });
    if($(".doorunits-field:disabled").length > 0){
        $(".doorunits-field[value=0]").prop("checked",true).change();
    }
}
function junctionCount(){
    var junction = 0;
    var calculatedPanelCount = calcPanelCount();
    var doorunits = $(".doorunits-field:checked").val() != undefined ? Number($(".doorunits-field:checked").val()) : 0;
    if(doorunits > 0){
        if(calculatedPanelCount > 2){
            if($(".doorplacement-field:checked").val() != "center"){
                //console.log("not center ",calculatedPanelCount - 1);
                junction = calculatedPanelCount - 1;
            } else{
                //console.log("center ",calculatedPanelCount - 2);
                junction = calculatedPanelCount - 2;
            }
        } else{
            if($(".doorplacement-field:checked").val() != "center"){
                //console.log("not center ",calculatedPanelCount - 1);
                junction = calculatedPanelCount - 1;
            } else{
                //console.log("center ",calculatedPanelCount - 2);
                junction = calculatedPanelCount - 2;
            }
        }

    } else{
        junction = calculatedPanelCount - 1;
    }

    return junction;
}
 
function calcTotalData(wallWidthMm, wallHeightMm, frameTotal){
    var billOfMaterials = [];
    var calculatedPanelCount = calcPanelCount();
    var doorunits = $(".doorunits-field:checked").val() != undefined ? Number($(".doorunits-field:checked").val()) : 0;

    var totalTrackLength = (wallWidthMm * 2) + (wallHeightMm * 2);
    //var tracksDimensionsText = "Top + Left + bottom + Right";
    if(doorunits > 0){
        totalTrackLength = totalTrackLength - (Number($(".doordimensions-field").val()) * 2);
        //tracksDimensionsText = "Left + Right";
        totalTrackLength = totalTrackLength + (wallHeightMm * 2);
        if(!$(".glass-between-door-tinker-side-field").prop("checked") && ($(".doorplacement-field:checked").val() == "left" || $(".doorplacement-field:checked").val() == "right")){
            totalTrackLength = totalTrackLength - wallHeightMm;
            // if($(".doorplacement-field:checked").val() == "left"){
            //     tracksDimensionsText = "Top + bottom + Right";
            // }
            // else if($(".doorplacement-field:checked").val() == "right"){
            //     tracksDimensionsText = "Top + Left + bottom";
            // }
        }
    }

    var $wallType = $(".walltype-field:checked");
    var $glassType = $(".glasstype-field:checked");
    var $track = $(".track-field:checked");
    var $beading = $(".beading-field:checked");
    var $junction = $(".junction-field:checked");
    var junctionQty = Math.ceil((junctionCount() * wallHeightMm) / $junction.attr("data-junctionlength"));
    var $supportblock = $(".supportblock-field:checked");
    var supportblockQty = (calcPanelCount() * 2);

    var $doorUnit = $(".doorunits-field:checked");
    var $doorsill = $(".doorsill-field:checked");
    var $doorlock = $(".lock-field:checked");
    var $doorhandle = $(".doorhandle-field:checked");

    var $panelFrameColor = $(".panel-frame-color.active"); 
    var $finishcolor = $(".finishcolor-field:checked");

    var $measuring = $(".measuring-field:checked");
    var $delivery = $(".delivery-field:checked");
    


    billOfMaterials = [
        {
            "item": "Wall Type ("+$wallType.attr("data-label")+")",
            "length": "",
            "basis": "",
            "qty": 1,
            "unitprice": Number($wallType.val()),
            "subtotal": Number($wallType.val()) * calculatedPanelCount
        },
        {
            "item": "Glass Type "+$glassType.parent().find(".option-text").html(),
            "length": $(".walltype-field:checked").attr("data-panelwidth")+" mm",
            "basis": $glassType.attr("data-label").split("mm")[0]+" mm",
            "qty": calculatedPanelCount,
            "unitprice": Number($glassType.val()),
            "subtotal": Number($glassType.val()) * calcPanelCount()
        },
        {
            "item": "Tracks (perimeter)",
            "length": $track.attr("data-tracklength")+" mm",
            "basis": totalTrackLength+" mm",
            "qty": Math.ceil(totalTrackLength / $track.attr("data-tracklength")),
            "unitprice": $track.val(),
            "subtotal": $track.length > 0 ? Math.ceil(totalTrackLength / $track.attr("data-tracklength")) * $track.val() : 0
        },
        {
            "item": "Beading (perimeter)",
            "length": $beading.attr("data-beadinglength")+" mm",
            "basis": totalTrackLength+" mm",
            "qty": Math.ceil(totalTrackLength / $beading.attr("data-beadinglength")),
            "unitprice": $beading.val(),
            "subtotal": $beading.length > 0 ? Math.ceil(totalTrackLength / $beading.attr("data-beadinglength")) * $beading.val() : 0
        }
    ];

    if(junctionQty > 0){
        billOfMaterials.push({
            "item": "Junctions (vertical seams)",
            "length": $junction.attr("data-junctionlength")+" mm",
            "basis": (junctionCount() * wallHeightMm) +" mm",
            "qty": Math.ceil((junctionCount() * wallHeightMm) / $junction.attr("data-junctionlength")),
            "unitprice": $junction.val(),
            "subtotal": $junction.length > 0 ? Math.ceil((junctionCount() * wallHeightMm) / $junction.attr("data-junctionlength")) * $junction.val() : 0
        });
    }
    if(supportblockQty > 0){
        billOfMaterials.push({
            "item": "Support Blocks",
            "length": "2 pcs",
            "basis": "pcs",
            "qty": (calcPanelCount() * 2),
            "unitprice": $supportblock.val(),
            "subtotal": $supportblock.length > 0 ? (calcPanelCount() * 2) * $supportblock.val() : 0
        });
    }

    if(Number($doorUnit.val()) > 0){
        billOfMaterials.push({
            "item": "Door Unit ("+$doorUnit.attr("data-label")+")",
            "length": "",
            "basis": "",
            "qty": 1,
            "unitprice": Number($doorUnit.val()),
            "subtotal": Number($doorUnit.val())
        },
        {
            "item": "Door Sill ("+$doorsill.attr("data-label")+")",
            "length": "",
            "basis": "",
            "qty": 1,
            "unitprice": Number($doorsill.val()),
            "subtotal": Number($doorsill.val())
        },
        {
            "item": "Door Lock ("+$doorlock.attr("data-label")+")",
            "length": "",
            "basis": "",
            "qty": 1,
            "unitprice": Number($doorlock.val()),
            "subtotal": Number($doorlock.val())
        },
        {
            "item": "Door Handle ("+$doorhandle.attr("data-label")+")",
            "length": "",
            "basis": "",
            "qty": 1,
            "unitprice": Number($doorhandle.val()),
            "subtotal": Number($doorhandle.val())
        });
    }

    billOfMaterials.push({
        "item": "Frame Color ("+($panelFrameColor.length > 0 ? $panelFrameColor.attr("data-label")+" - "+$panelFrameColor.attr("data-color"): "Default Black - #333")+")",
        "length": "",
        "basis": "",
        "qty": "",
        "unitprice": $panelFrameColor.length > 0 ? Number($panelFrameColor.attr("data-price")): 0,
        "subtotal": $panelFrameColor.length > 0 ? Number($panelFrameColor.attr("data-price")): 0
    },
    {
        "item": "Finish Color ("+$finishcolor.attr("data-label")+")",
        "length": "",
        "basis": "",
        "qty": "",
        "unitprice": 0,
        "subtotal": 0
    });

    if(Number($measuring.val()) > 0){
        billOfMaterials.push({
            "item": "Measuring Charges ("+$measuring.attr("data-label")+")",
            "length": "",
            "basis": "",
            "qty": "",
            "unitprice": $measuring.val(),
            "subtotal": $measuring.val()
        });
    }
    if(Number($delivery.val()) > 0){
        billOfMaterials.push({
            "item": "Deliver to ("+$(".address-zipcode-field").val()+")",
            "length": "",
            "basis": "",
            "qty": "",
            "unitprice": $delivery.val(),
            "subtotal": $delivery.val()
        });
    }


    return {
        "id": Math.random().toString(36).substr(2, 8),
        "framephoto": $("#imgResult img").attr("src")??"",
        "wallwidth": wallWidthMm,
        "walllength": wallHeightMm,
        "walltype": $(".walltype-field:checked").attr("data-label")??"",
        "glasstype": $(".glasstype-field:checked").attr("data-label")??"",
        "doorunits":  Number($(".doorunits-field:checked").val()) > 0 ? $(".doorunits-field:checked").attr("data-label")??"" : "No door",
        "directionofrotation": $(".directionofrotation-field:checked").attr("data-label")??"",
        "doorsill": $(".doorsill-field:checked").attr("data-label")??"",
        "lock": $(".lock-field:checked").attr("data-label")??"",
        "doorhandle": $(".doorhandle-field:checked").attr("data-label")??"",
        "framecolor": $(".panel-frame-color.active").attr("data-label")??"",
        "finishcolor": $(".finishcolor-field:checked").attr("data-label")??"",
        "measuring": $(".measuring-field:checked").attr("data-label")??"",
        "delivery": $(".delivery-field:checked").attr("data-label")??"",
        "billOfMaterials": billOfMaterials,
        "framequantity" : 1,
        "frametotal": frameTotal
    };
}
function calcPanelCount(){
    var calc_value = 0;
    var exactPanelCount = 0;
    var wallWidthMm = $(".wall-width-field").val() != "" ? $(".wall-width-field").val(): 0;
    var doorunits = $(".doorunits-field:checked").val() != undefined ? Number($(".doorunits-field:checked").val()) : 0;
    var doordimensions = Number($(".doordimensions-field").val());
    if(doorunits > 0){
        // $("#glassFrame .glass-item:not(.door)").each(function(){
        //     var panelWidth = $(this).attr("data-panel") != undefined ? Number($(this).attr("data-panel").replaceAll("mm","")) : $(this).attr("data-offset") != undefined ? Number($(this).attr("data-offset").replaceAll("mm","")): 0;
        //     exactPanelCount = exactPanelCount + panelWidth;
        // });
        exactPanelCount = wallWidthMm - doordimensions;
        calc_value = exactPanelCount/per_Panel_width;
    } else{
        calc_value = wallWidthMm / per_Panel_width;
    }

    return Math.ceil(calc_value);
}
function calcTotal(addtoCart = false){
    var wallWidthMm = $(".wall-width-field").val() != "" ? $(".wall-width-field").val(): 0;
    var wallHeightMm = $(".wall-length-field").val() != "" ? $(".wall-length-field").val() : 0;
    var exactPanelCount = wallWidthMm / per_Panel_width;
    var calculatedPanelCount = calcPanelCount() //Math.ceil(exactPanelCount);

    var soundprooffoil_NODE = $(".glasstype-field:checked");
    $(".glass-frame .glass-item").removeClass("no-sound");
    if(soundprooffoil_NODE.length > 0 && soundprooffoil_NODE.attr("data-soundproofing")){
        $(".glass-frame .glass-item").addClass("no-sound");
    }

    var wallType = $(".walltype-field:checked").val() != undefined ? Number($(".walltype-field:checked").val()) : 0;
    var glasstype = $(".glasstype-field:checked").val() != undefined ? Number($(".glasstype-field:checked").val()) : 0;
    var doorunits = $(".doorunits-field:checked").val() != undefined ? Number($(".doorunits-field:checked").val()) : 0;

    var totalPanels = (calculatedPanelCount * wallType) + (calculatedPanelCount * glasstype);

    $(".design-panel .glass-frame .support-block").css("--block-color", $(".panel-frame-color.active").attr("data-color") != undefined ? $(".panel-frame-color.active").attr("data-color") : "#333");

    $(".design-panel .glass-frame").removeClass("door-on-left door-on-right door-has-offset");
    if(doorunits > 0 ){
        if($(".doorplacement-field:checked").val() == "left"){
            $(".design-panel .glass-frame").addClass("door-on-left");
        }
        if($(".doorplacement-field:checked").val() == "right"){
            $(".design-panel .glass-frame").addClass("door-on-right");
        }
        if($(".glass-between-door-tinker-side-field").prop("checked")){
            $(".design-panel .glass-frame").addClass("door-has-offset");
        }
    }

    $(".walltype-field").each(function(){
        var that = $(this);
        var doorUnit_Substract_Panel = doorunits > 0 ? wallType : 0;
            that.parents("label").find(".count").html((Number(that.val()) * calculatedPanelCount));
    });
    $(".glasstype-field").each(function(){
        var that = $(this);
        var doorUnit_Substract_Panel = doorunits > 0 ? glasstype : 0;
            that.parents("label").find(".count").html((Number(that.val()) * calculatedPanelCount));
    });

    var totalTrackLength = (wallWidthMm * 2) + (wallHeightMm * 2);
    if(doorunits > 0){
        totalTrackLength = totalTrackLength - (Number($(".doordimensions-field").val()) * 2);
        totalTrackLength = totalTrackLength + (wallHeightMm * 2);
        if(!$(".glass-between-door-tinker-side-field").prop("checked") && ($(".doorplacement-field:checked").val() == "left" || $(".doorplacement-field:checked").val() == "right")){
            totalTrackLength = totalTrackLength - wallHeightMm;
        }
    }

    $(".track-field").each(function(){
        var that = $(this);
        var trackLength = Number(that.attr("data-tracklength") != undefined ? that.attr("data-tracklength"): 0);
        if(trackLength > 0){
            var qty = Math.ceil(totalTrackLength / trackLength);
            that.parents("label").find(".count").html(qty * that.val());
            that.parents("label").find(".temp-count").html("Price: "+that.val()+", Qty: "+qty+", Length: "+trackLength+" mm");
        }
    });
    $(".beading-field").each(function(){
        var that = $(this);
        var beadingLength = Number(that.attr("data-beadinglength") != undefined ? that.attr("data-beadinglength"): 0);
        if(beadingLength > 0){
            var qty = Math.ceil(totalTrackLength / beadingLength);
            that.parents("label").find(".count").html(qty * that.val());
            that.parents("label").find(".temp-count").html("Price: "+that.val()+", Qty: "+qty+", Length: "+beadingLength+" mm");
        }
    });
    $(".junction-field").each(function(){
        var that = $(this);
        var junctionLength = Number(that.attr("data-junctionlength") != undefined ? that.attr("data-junctionlength"): 0);
        if(junctionLength > 0){
            var qty = Math.ceil((junctionCount() * wallHeightMm) / junctionLength);
            that.parents("label").find(".count").html(qty * that.val());
            that.parents("label").find(".temp-count").html("Price: "+that.val()+", Qty: "+qty+", Length: "+junctionLength+" mm");
        }
    });
    $(".supportblock-field").each(function(){
        var that = $(this);
        var qty = calcPanelCount() * 2;
        that.parents("label").find(".count").html(qty * that.val());
        that.parents("label").find(".temp-count").html("Price: "+that.val()+", Qty: "+qty+", Pcs: 2");
    });

    if($(".track-field:checked").length > 0){
        $(".design-frame-wrapper").addClass("track");
    }
    if($(".beading-field:checked").length > 0){
        $(".design-frame-wrapper").addClass("beading");
    }
    if($(".junction-field:checked").length > 0){
        $(".design-frame-wrapper").addClass("junction");
    }
    if($(".supportblock-field:checked").length > 0){
        $(".design-frame-wrapper").addClass("supportblock");
    }


    if(doorunits > 0){
        var dropsill_value = $(".doorsill-field:checked").val() != undefined ? Number($(".doorsill-field:checked").val()) : 0;
        var lock_value = $(".lock-field:checked").val() != undefined ? Number($(".lock-field:checked").val()) : 0;
        var doorhandle_value = $(".doorhandle-field:checked").val() != undefined ? Number($(".doorhandle-field:checked").val()) : 0;
            doorunits = doorunits + dropsill_value + lock_value + doorhandle_value;
        if(Number($(".doorunits-field:checked").val()) > 0){
            //totalPanels = totalPanels - wallType - glasstype;
        }
        var doorBottomSpacing_Field = $(".door-bottom-spacing-field").val();
        $('.glass-item.door .door-spacing').css({ "height": (Number(doorBottomSpacing_Field) * 0.1)+"px" })
    }

    var trackValue = $(".track-field:checked").length > 0 ? Math.ceil(totalTrackLength / $(".track-field:checked").attr("data-tracklength")) * $(".track-field:checked").val() : 0;
    var beadingValue = $(".beading-field:checked").length > 0 ? Math.ceil(totalTrackLength / $(".beading-field:checked").attr("data-beadinglength")) * $(".beading-field:checked").val() : 0;

    var junctionValue = $(".junction-field:checked").length > 0 ? Math.ceil((junctionCount() * wallHeightMm) / $(".junction-field:checked").attr("data-junctionlength")) * $(".junction-field:checked").val() : 0;
    var supportValue = $(".supportblock-field:checked").length > 0 ? (calcPanelCount() * 2) * $(".supportblock-field:checked").val() : 0;
    var otherAccessories = trackValue + beadingValue + junctionValue + supportValue;

    var measuring = $(".measuring-field:checked").val() != undefined ? Number($(".measuring-field:checked").val()) : 0;
    var delivery = $(".delivery-field:checked").val() != undefined ? Number($(".delivery-field:checked").val()) : 0;
    var frameColorPrice = $(".panel-frame-color.active").length > 0 ? Number($(".panel-frame-color.active").attr("data-price")): 0;
    var frameTotal = totalPanels + otherAccessories + doorunits + measuring + delivery + frameColorPrice;

    $(".form-total").html(frameTotal);

    validate_nextstep_BTN();


    if(addtoCart){
        window["nextstepBTN"] = $(".next-step-btn").html();
        $(".next-step-btn").attr("disabled",true);
        $(".next-step-btn").html('<span>Processing Data...</span>');
        createCanvas(function(data){
            if(typeof customCalcTotal == "function"){
                return customCalcTotal({
                    success: true,
                    data: calcTotalData(wallWidthMm, wallHeightMm, frameTotal)
                })
            } else{
                //var storedCartItems = localStorage.getItem("cartItems") != undefined ? JSON.parse(localStorage.getItem("cartItems")) : [];
                var storedCartItems = [];
                var cart_item_data = calcTotalData(wallWidthMm, wallHeightMm, frameTotal);
                storedCartItems.push(cart_item_data);
                localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
                window.location.replace("cart.html");
            }
        });
    }
}
function setDimention(wallWidth = 0, wallHeight = 0){
    $(".wall-width-dimension").attr("data-content",wallWidth != 0 ? ""+wallWidth+" mm" : "");
    $(".wall-height-dimension").attr("data-content", wallHeight != 0 ? ""+wallHeight+" mm" : "");
}
function setWallSizing(){
    var wall_Attr = {};
    if($(".walltype-field:checked").prop("checked")){
        wall_Attr = $(".walltype-field:checked").data();
        //console.log("wall_Attr | ",wall_Attr);
        var $wallWidth = $(".wall-width-field");
        var $wallHeight = $(".wall-length-field");
            $wallWidth.attr("min", wall_Attr.minwidth);
            $wallWidth.attr("max", wall_Attr.maxwidth);

            $wallHeight.attr("min", wall_Attr.minheight);
            $wallHeight.attr("max", wall_Attr.maxheight);

            per_Panel_width = wall_Attr.panelwidth;
            per_Panel_minWidth = wall_Attr.minwidth;
            per_Panel_height = wall_Attr.maxheight;

            $wallWidth.parent().find(".sizing-width-hint").html(`Min ${wall_Attr.minwidth} mm, max ${wall_Attr.maxwidth} mm`);
            $wallHeight.parent().find(".sizing-length-hint").html(`Min ${wall_Attr.minheight} mm, max ${wall_Attr.maxheight} mm`);
    }
}
/* Helper: equal-split with min/max per-slot using a water-filling approach */
function _equalSplitWithBounds(total, count, minW, maxW) {
    var arr = [];
    if (count <= 0) return arr;

    // quick equal value
    var remaining = total;
    var remainingCount = count;
    var boundsFixed = new Array(count).fill(false);

    // Iteratively assign slots using waterfilling:
    while (remainingCount > 0) {
        var equal = remaining / remainingCount;
        var fixedAny = false;

        for (var i = 0; i < count; i++) {
            if (boundsFixed[i]) continue;
            if (equal <= minW + 1e-6) {
                // Fix this slot to min
                arr[i] = minW;
                boundsFixed[i] = true;
                remaining -= minW;
                remainingCount--;
                fixedAny = true;
                break; // restart iteration
            }
            if (equal >= maxW - 1e-6) {
                // Fix this slot to max
                arr[i] = maxW;
                boundsFixed[i] = true;
                remaining -= maxW;
                remainingCount--;
                fixedAny = true;
                break; // restart
            }
        }
        if (!fixedAny) {
            // we can distribute equal value to all non-fixed slots
            for (var j = 0; j < count; j++) {
                if (!boundsFixed[j]) arr[j] = remaining / remainingCount;
            }
            break;
        }
    }

    // If some slots still undefined (edge rounding), fill with min or equal remainder
    for (var k = 0; k < count; k++) {
        if (typeof arr[k] === 'undefined') arr[k] = Math.max(minW, Math.min(maxW, remaining / remainingCount || minW));
    }

    // Final rounding: try to respect integer mm sum (distribute leftover)
    // Convert to integer mm and adjust difference
    var intArr = arr.map(x => Math.round(x));
    var diff = total - intArr.reduce((a,b)=>a+b,0);
    // distribute positive or negative diff across slots (prefer not to break bounds)
    var idx = 0;
    while (diff !== 0 && idx < count*2) {
        var i = idx % count;
        if (diff > 0 && intArr[i] < maxW) { intArr[i]++; diff--; }
        else if (diff < 0 && intArr[i] > minW) { intArr[i]--; diff++; }
        idx++;
    }
    // enforce bounds one more time (safety)
    for (var z = 0; z < count; z++) {
        intArr[z] = Math.max(minW, Math.min(maxW, intArr[z]));
    }
    return intArr;
}

/* Helper to redistribute panel widths (keeps function name) */
function redistributePanels(total, count) {
    var panels = [];
    if (count <= 0) return panels;
    // Boundaries
    var minW = typeof per_Panel_minWidth !== 'undefined' ? per_Panel_minWidth : 200;
    var maxW = per_Panel_width;

    // If only one slot, give it entire total clamped to bounds
    if (count === 1) {
        var only = Math.max(minW, Math.min(maxW, Math.round(total)));
        return [only];
    }

    // If total is less than count*min, still allocate min to as many as possible and let last be remainder
    var minTotal = minW * count;
    if (total <= minTotal) {
        // Everyone gets at least min, but if total < minTotal we must shrink some to fit:
        // We'll distribute proportionally but not below 1 (edge-case)
        var base = Math.floor(total / count);
        var arr = new Array(count).fill(base);
        var rem = total - arr.reduce((a,b)=>a+b,0);
        var i = 0;
        while (rem > 0) { arr[i % count]++; rem--; i++; }
        // ensure at least 1 mm
        return arr;
    }

    // Use water-filling equal split with bounds:
    panels = _equalSplitWithBounds(total, count, minW, maxW);

    return panels;
}

function createGlassPanel(){

    // Calculation:
    var wallWidthMm = $(".wall-width-field").val() != "" ? Number($(".wall-width-field").val()): per_Panel_width;
    var wallHeightMm = $(".wall-length-field").val() != "" ? Number($(".wall-length-field").val()) : per_Panel_height;
    var panelPrice = $(".walltype-field:checked").length > 0 ? Number($(".walltype-field:checked").val()): 0;

    var door_unit = $(".doorunits-field:checked").length > 0 ? Number($(".doorunits-field:checked").val()):0;
    var doorPlacement = $(".doorplacement-field:checked").length > 0 ? $(".doorplacement-field:checked").val() : $(".doorplacement-field").eq(0).val();
    var doorType = $(".doortype-field:checked").length > 0 ? $(".doortype-field:checked").val() : ($(".doortype-field").eq(0).val() || "singledoor");

    var doorWidth = Number($(".doordimensions-field").val()) > 0 ? Number($(".doordimensions-field").val()) : Number($(".doordimensions-field").attr("min"));

    var offsetEnabled = $(".glass-between-door-tinker-side-field").prop("checked");
    var doorOffset = Number($(".door-offset-field").val()) > 0 ? Number($(".door-offset-field").val()) : 300;
    var divideGlassesEvenly = $(".divide-glasses-evenly-field").prop("checked");

    // exactPanelCount is the visual representation (with decimals)
    var exactPanelCount = wallWidthMm / per_Panel_width;

    // For pricing or ordering, use the ceiling value (decimal means an extra panel is needed)
    var calculatedPanelCount = Math.ceil(exactPanelCount);

    var finalSlots = []; // Each element will be an object {type: "panel"|"door"|"offset", width: mm}

    $(".design-panel .glass-frame").html("");

    var minW = typeof per_Panel_minWidth !== 'undefined' ? per_Panel_minWidth : 200;
    var maxW = per_Panel_width;

    // CASE: Door present
    if(door_unit > 0){
        // compute how many panel slots we have to fill with glass panels (not door/offset)
        // base: one door replaces one panel
        var nonPanelSlots = 1; // door
        if(offsetEnabled) nonPanelSlots += 1; // offset occupies a slot (we will treat it separately)
        var panelsCount = Math.max(0, calculatedPanelCount - nonPanelSlots);

        // total width available for panels = wallWidth - widths occupied by door and offset slots
        var widthForPanels = (wallWidthMm - doorWidth) - (offsetEnabled ? doorOffset : 0);

        // Edge safety
        if (widthForPanels < panelsCount * minW) {
            // Not enough width — allow panelsCount to reduce (collapse panels into fewer slots)
            // reduce panelsCount until fits or to zero
            while (panelsCount > 0 && widthForPanels < panelsCount * minW) panelsCount--;
        }
        // If panelsCount becomes zero, remaining width will be just door + offset (we'll still create nothing else)

        // If panelsCount > 0, distribute equally
        var panelSizes = panelsCount > 0 ? redistributePanels(widthForPanels, panelsCount) : [];

        // Now build finalSlots depending on placement and offset configuration
        if (doorPlacement === "center") {
            // split panels evenly left/right by count
            var leftCount = Math.floor(panelSizes.length / 2);
            var leftPanels = panelSizes.slice(0, leftCount);
            var rightPanels = panelSizes.slice(leftCount);

            // left panels
            for (var i = 0; i < leftPanels.length; i++) finalSlots.push({type:"panel", width:leftPanels[i]});
            // door
            finalSlots.push({type:"door", width:doorWidth});
            // right panels
            for (var i = 0; i < rightPanels.length; i++) finalSlots.push({type:"panel", width:rightPanels[i]});
            // if offsetEnabled and divideGlassesEvenly: place offset halves left and right beside door
            if (offsetEnabled) {
                // When center + offset: logically offset would be adjacent to door both sides.
                // We'll insert half-offset before and after door if divideGlassesEvenly true,
                // otherwise place one offset on left side (conservative)
                if (divideGlassesEvenly) {
                    // insert half offset before door and after door
                    // find door index
                    var di = finalSlots.findIndex(s=>s.type==="door");
                    finalSlots.splice(di, 0, {type:"offset", width: Math.round(doorOffset/2)});
                    finalSlots.splice(di+2, 0, {type:"offset", width: Math.round(doorOffset/2)});
                } else {
                    // place single offset before door
                    var di2 = finalSlots.findIndex(s=>s.type==="door");
                    finalSlots.splice(di2, 0, {type:"offset", width: doorOffset});
                }
            }
        }
        else if (doorPlacement === "left") {
            // For left, offset (if any) appears left to the door (as per your rule)
            // If offsetEnabled and divideGlassesEvenly true, we will place half-offset before panels as spacer
            // offset on left if present
            if (offsetEnabled) {
                finalSlots.push({type:"offset", width: divideGlassesEvenly ? Math.round(doorOffset/2) : doorOffset});
            }
            // door
            finalSlots.push({type:"door", width:doorWidth});
            // panels
            for (var i = 0; i < panelSizes.length; i++) finalSlots.push({type:"panel", width:panelSizes[i]});
            if (divideGlassesEvenly && offsetEnabled) {
                finalSlots.push({type:"offset", width: Math.round(doorOffset/2)});
            }
        }
        else if (doorPlacement === "right") {
            // For right, panels first then door (and offset on the right side)
            // If offsetEnabled and divideGlassesEvenly true, we will place half-offset before panels as spacer
            if (divideGlassesEvenly && offsetEnabled) {
                finalSlots.push({type:"offset", width: Math.round(doorOffset/2)});
            }
            // panels
            for (var i = 0; i < panelSizes.length; i++) finalSlots.push({type:"panel", width:panelSizes[i]});
            // door
            finalSlots.push({type:"door", width:doorWidth});
            // offset on right if present
            if (offsetEnabled) {
                finalSlots.push({type:"offset", width: divideGlassesEvenly ? Math.round(doorOffset/2) : doorOffset});
            }
        }

        // Safety: if panels were reduced to zero but finalSlots only contain door/offset, we keep it as is.
    }
    // CASE: No door — just evenly split the whole wall into calculatedPanelCount panels
    else {
        var panelsCount = calculatedPanelCount;
        if (panelsCount < 1) panelsCount = 1;
        var panelSizes = redistributePanels(wallWidthMm, panelsCount);
        // For aesthetic/visual parity we will split into left/right halves similar to center door logic:
        var leftCount = Math.floor(panelSizes.length / 2);
        var leftPanels = panelSizes.slice(0, leftCount);
        var rightPanels = panelSizes.slice(leftCount);
        for (var i = 0; i < leftPanels.length; i++) finalSlots.push({type:"panel", width:leftPanels[i]});
        for (var i = 0; i < rightPanels.length; i++) if (rightPanels[i] > 0) finalSlots.push({type:"panel", width:rightPanels[i]});
    }

    // Render finalSlots into DOM (unchanged API/markup)
    finalSlots.forEach(function(slot){
        var GlassPanel_NODE = $(GlassPanel());
        var widthPx = slot.width * scale;
        GlassPanel_NODE.css({
            "min-width": widthPx + "px",
            "min-height": (wallHeightMm * scale) + "px",
            "max-width": widthPx + "px",
            "max-height": (wallHeightMm * scale) + "px"
        });
        if(widthPx <= 27){
            GlassPanel_NODE.addClass("small-panel");
        }
        if(widthPx <= 50){
            GlassPanel_NODE.addClass("rotate-dimension");
        }
        if(slot.type === "panel"){
            GlassPanel_NODE.addClass("panel").attr("data-panel",slot.width+"mm");
        }
        else if(slot.type === "door"){
            var doorHTML = "";
            var findColorAccordion_li_active = $(".find-color-accordion ul li.active");
            var doorsill_field_value = Number($(".doorsill-field:checked").val());
            var directionofrotation = $(".directionofrotation-field:checked").val();
                GlassPanel_NODE.addClass("door").attr("data-door",slot.width+"mm");
                GlassPanel_NODE.find(".door").css("--door-color", "#333");

                if(doorType.toLowerCase() == "singledoor"){
                    GlassPanel_NODE.addClass(directionofrotation);
                    doorHTML = GlassDoor();
                }
                if(doorType.toLowerCase() == "doubledoor"){
                    GlassPanel_NODE.addClass("double-door");
                    doorHTML = GlassDoor()+GlassDoor();
                }
                GlassPanel_NODE.html(doorHTML);

                GlassPanel_NODE.removeClass("door-sill");
                if(doorsill_field_value > 0){
                    GlassPanel_NODE.addClass("door-sill")
                }
                if($(".doorhandle-field:checked").length > 0){
                    var doorHandle_src = file_path+$(".doorhandle-field:checked").attr("data-handle");
                    if(new RegExp("http").test($(".doorhandle-field:checked").attr("data-handle"))){
                        doorHandle_src = $(".doorhandle-field:checked").attr("data-handle");
                    }
                    GlassPanel_NODE.find(".door-handle img").attr("src",doorHandle_src);
                }
                if(findColorAccordion_li_active.length > 0){
                    GlassPanel_NODE.find(".door").css("--door-color", findColorAccordion_li_active.attr("data-color"));
                    GlassPanel_NODE.css({"background-color": findColorAccordion_li_active.attr("data-color")});
                    GlassPanel_NODE.find(".door-glass").css({"border-color": findColorAccordion_li_active.attr("data-color")});
                    $(".design-panel .glass-frame").css({"outline-color": findColorAccordion_li_active.attr("data-color")});
                }

        }
        else if(slot.type === "offset"){
            GlassPanel_NODE.addClass("offset").attr("data-offset",slot.width+"mm");
        }

        $(".design-panel .glass-frame").append(GlassPanel_NODE);
    });

    setDimention(wallWidthMm, wallHeightMm);
    calcTotal();
}
function validateCurrentStep(){
    var valid = false;
    $(".steps-nav .step-nav-"+step).removeClass("completed");
    if(formValidation(".step.step-"+step)){
        $(".steps-nav .step-nav-"+step).addClass("completed");
        valid = true;
    }
    return valid;
}
function switchSteps(x = true){
    var totalSteps = $(".steps-wrapper .step").length;

    if(x){
        if(totalSteps != step){
            step = step + 1;
        }
    } else{
        if(step > 1){
            step = step - 1;
        }
    }
    $(".steps-nav li").removeClass("active");
    $(".steps-wrapper .step").removeClass("active");
    $(".steps-wrapper .step[data-step="+step+"]").addClass("active");
    $(".steps-nav li[data-step="+step+"]").addClass("active");

    /* current step next button */
    validate_nextstep_BTN();
    formValidation(".step.step-"+step,true);

    $(".next-step-btn").removeClass("add-to-cart-btn");
    if(step == totalSteps){
        $(".next-step-btn").addClass("add-to-cart-btn");
    }
}
function createCanvas(callback = function(data){}){
    if(window.location.protocol != "file:"){
        var canvaPlayGround = document.querySelector(".design-board");
        document.querySelector("#canvasResult").innerHTML = "";
        html2canvas(canvaPlayGround,{
            "backgroundColor" : "transparent",
            allowTaint: true,
            useCORS : true,
            imageTimeout : 15000,
        }).then(canvas => {
            document.querySelector("#canvasResult").appendChild(canvas);
            var canvasResponse = document.querySelector("canvas");
            document.querySelector("#imgResult").innerHTML = '<img src="'+canvasResponse.toDataURL()+'" />';
            //canvasResponse.toDataURL() by default image/png || image/jpeg
            callback(canvasResponse.toDataURL());
        });
    } else{
        callback("nocanvasimage");
    }
}
function loadCartItems(){
    var html = "";
    var cartItemTotal = 0;
    var cartItems = localStorage.getItem("cartItems") != null ? JSON.parse(localStorage.getItem("cartItems")):[];

    $("#cartItemList").html("");
    if(cartItems.length > 0){
        console.log(cartItems);
        cartItems.forEach(function(item){
            html += Cartitem(item);
            cartItemTotal = cartItemTotal + (item.frametotal * item.framequantity);
        });
    }
    $("#cartItemList").html(html);
    $("#cartsubTotal, #cartTotal").html(cartItemTotal);
}

/* querys */
$(document).on("keyup",".wall-width-field, .wall-length-field",function(){
    var that = $(this);
    var width = $(".wall-width-field").val() != "" ? Number($(".wall-width-field").val()): per_Panel_width;
    var height = $(".wall-length-field").val() != "" ? Number($(".wall-length-field").val()) : per_Panel_height;
    var max = that.attr("max");
    var min = that.attr("min");
    disabledEnabledDoorunitAndOtherMaterials();
    formValidation(".step.step-1",true);
    if((width < Number($(".wall-width-field").attr("min")) || width > Number($(".wall-width-field").attr("max"))) || (height < Number($(".wall-length-field").attr("min")) || height > Number($(".wall-length-field").attr("max")))){
        formValidation(".step.step-1")
    } else{
        createGlassPanel()
    }
});
$(document).on("change",".walltype-field, .glasstype-field, .track-field, .beading-field, .junction-field, .supportblock-field",function(){
    var that = $(this);
    /* calculate */
    if(that.hasClass("walltype-field")){
        if($(".wall-dimensions-block").is(":visible")){
            calcTotal();
        }
        $(".wall-dimensions-block").removeClass("d-none");
        setWallSizing();
        if(Number($(".wall-width-field").val()) > 0 || Number($(".wall-length-field").val()) > 0){
            $(".wall-width-field").keyup();
        }
    }
    else{
        if(that.hasClass("glasstype-field")){
            var $glassField_NODE = $(".glasstype-field:checked");
            if($glassField_NODE.length  > 0){
                var accasories_Array = $glassField_NODE.attr("data-accasories").split(",");
                if(accasories_Array.length > 0){
                    $(".beading-block .custom-radio").eq(Number(accasories_Array[0]) - 1).find("input").prop("checked",true);
                    $(".track-block .custom-radio").eq(Number(accasories_Array[1]) - 1).find("input").prop("checked",true);
                    $(".junction-block .custom-radio").eq(Number(accasories_Array[2]) - 1).find("input").prop("checked",true);
                    $(".supportblock-block .custom-radio").eq(Number(accasories_Array[3]) - 1).find("input").prop("checked",true);
                    //$(".beading-block,.track-block,.junction-block,.supportblock-block").addClass("d-block").removeClass("d-none");
                }
            }
        }
        calcTotal();
    }
});
$(document).on("change keyup",".doorunits-field, .doordimensions-field, .doorplacement-field, .door-offset-field, .glass-between-door-tinker-side-field, .divide-glasses-evenly-field, .doortype-field, .directionofrotation-field, .door-bottom-spacing-field",function(e){
    var that = $(this);
    var valid = false;

    if(that.hasClass("doorunits-field")){
        $(".door-offset-field").attr("checked",false).change();
        $(".doordimensions-field").removeAttr("required");

        if(that.prop("checked") && that.val() != 0){
            if(Number($(".doorunits-field:checked").attr("data-singledoormin")) <= Number($(".wall-width-field").val())){
                $(".door-units-options").removeClass("d-none").addClass("d-block");
                $(".doordimensions-field").attr("required",true);
                $(".doortype-field[value=singledoor]").attr("data-doormin",that.attr("data-singledoormin"));
                $(".doortype-field[value=singledoor]").attr("data-doormax",that.attr("data-singledoormax"));
                $(".doortype-field[value=doubledoor]").attr("data-doormin",that.attr("data-doubledoormin"));
                $(".doortype-field[value=doubledoor]").attr("data-doormax",that.attr("data-doubledoormax"));
                /* door-units-options each loop */
                $(".door-units-options input[type=radio]").each(function(){
                    if($("input[name="+$(this).attr("name")+"]:checked").length == 0){
                        $("input[name="+$(this).attr("name")+"]:first").prop("checked",true).change();
                    }
                });
            } else{
                $(".doorunits-field[value=0]").prop("checked",true).change();
            }
        } else{
            $(".door-units-options, .door-offset-box").removeClass("d-block").addClass("d-none");
            $(".doordimensions-field").val($(".doordimensions-field").attr("min"));
            /* door-units-options each loop */
            $(".door-units-options input[type=radio]").each(function(){
                $("input[name="+$(this).attr("name")+"]:first").prop("checked",true).change();
            });
        }
        formValidation(".step.step-"+step);
        validate_nextstep_BTN();
    }
    if(that.hasClass("doordimensions-field")){
        valid = formValidation(".step.step-"+step);
        if(Number($(".doordimensions-field").val()) > Number($(".doordimensions-field").attr("max"))){
            $(".doordimensions-field").val($(".doordimensions-field").attr("min")).change();
        }
        if(Number(that.val()) > 0 && (Number(that.val()) > Number(that.attr("min")) && Number(that.val()) < Number(that.attr("max")))){
            valid = true;
        }
    }
    if(that.hasClass("doorplacement-field") || that.hasClass("door-offset-field")){
        valid = true;
        if(that.hasClass("doorplacement-field")){
            $(".door-offset-box").removeClass("d-block").addClass("d-none");
            if(that.val() == "left" || that.val() == "right"){
                $(".door-offset-box").removeClass("d-none").addClass("d-block");
            } else{
                //$(".door-offset-field").prop("checked",false);
                $(".glass-between-door-tinker-side-field").prop("checked",false);
                $(".glass-between-door-tinker-side-field").change();
            }
        }
        if(that.hasClass("door-offset-field")){
            $(".divide-glasses-evenly-field-box").addClass("d-none");
            $(".divide-glasses-evenly-field-box").removeClass("d-block");
            if(Number(that.val()) >= 600){
                $(".divide-glasses-evenly-field-box").removeClass("d-none");
                $(".divide-glasses-evenly-field-box").addClass("d-block");
            } else{
                $(".divide-glasses-evenly-field").prop("checked",false).change();
            }
            if(Number(that.val()) > Number(that.attr("max"))){
                valid = formValidation(".step.step-"+step);
            }
        }
        validate_nextstep_BTN();
    }
    if(that.hasClass("glass-between-door-tinker-side-field")){
        $(".door-offset-field").val($(".door-offset-field").attr("min"));
        if(that.prop("checked")){
            $(".door-offset-field-box").removeClass("d-none");
            $(".door-offset-field-box").addClass("d-block");
            valid = true;
        } else{
            $(".door-offset-field-box").addClass("d-none");
            $(".door-offset-field-box").removeClass("d-block");

            $(".divide-glasses-evenly-field-box").addClass("d-none");
            $(".divide-glasses-evenly-field-box").removeClass("d-block");
            $(".divide-glasses-evenly-field").prop("checked",false).change();
        }
    }
    if(that.hasClass("divide-glasses-evenly-field")){
        valid = true;
    }
    if(that.hasClass("doortype-field")){
        $(".doordimensions-field").attr("max",that.attr("data-doormax"));
        $(".doordimensions-field").attr("min",that.attr("data-doormin"));
        $(".doordimensions-field").change();
        $(".doordimensions-field").parent().find(".text-hint").html("Min "+that.attr("data-doormin")+" mm, max "+that.attr("data-doormax")+" mm");
        $(".directionofrotation-block").removeClass("d-block").addClass("d-none");
        $(".directionofrotation-block").find(".directionofrotation:first").prop("checked",true).change();
        if(that.val() == "singledoor"){
            $(".directionofrotation-block").removeClass("d-none").addClass("d-block");
        }
        valid = true;
    }
    if(that.hasClass("directionofrotation-field")){
        $(".glass-frame .glass-item.door").addClass(that.val() == "left" ? "left":"right").removeClass(that.val() == "left" ? "right":"left");
    }
    if(that.hasClass("door-bottom-spacing-field")){
        valid = true;
    }

    if(valid){
        createGlassPanel();
    }
});
$(document).on("change keyup click",".doorsill-field, .lock-field, .doorhandle-field, .panel-frame-color, .measuring-field, .delivery-field, .address-zipcode-field",function(){
    var that = $(this);
    if(that.hasClass("doorsill-field")){
        $(".glass-frame .glass-item.door").removeClass("door-sill");
        if(Number(that.val()) > 0){
            $(".glass-frame .glass-item.door").addClass("door-sill");
        }
    }
    else if(that.hasClass("doorhandle-field")){
        $(".glass-frame .glass-item.door").find(".door-handle img").attr("src",new RegExp("http").test(that.attr("data-handle")) ? that.attr("data-handle") : file_path+that.attr("data-handle"));
    }
    else if(that.hasClass("panel-frame-color")){
        // Check if the clicked li is already active
        if (that.hasClass("active")) {
            that.removeClass("active");  // Remove active if it's already active
            $(".glass-frame .glass-item.door .door").css("--door-color", "#333");
            $(".glass-frame .glass-item.door").css({"background-color": ""});
            $(".glass-frame .glass-item.door .door-glass").removeAttr("style");
            $(".design-panel .design-frame-wrapper").removeAttr("style");
        } else {
            $(".find-color-accordion ul li").removeClass("active");  // Remove active from all
            that.addClass("active");  // Add active to clicked li
            $(".glass-frame .glass-item.door .door").css("--door-color", that.attr("data-color"));
            $(".glass-frame .glass-item.door").css({"background-color": that.attr("data-color")});
            $(".glass-frame .glass-item.door .door-glass").css({"border-color": that.attr("data-color")});
            $(".design-panel .design-frame-wrapper").css({"border-color": that.attr("data-color")});
        }
    }
    else if(that.hasClass("doorhandle-field")){
        $(".glass-frame .glass-item.door").find(".door-handle img").attr("src",file_path+that.attr("data-handle"));
    }
    else if(that.hasClass("delivery-field")){
        $(".address-zipcode-box").removeClass("d-block").addClass("d-none");
        $(".address-zipcode-field").removeAttr("required");
        if(Number(that.val()) > 0){
            $(".address-zipcode-box").removeClass("d-none").addClass("d-block");
            $(".address-zipcode-field").attr("required",true);
        } else{
            $(".address-zipcode-field").val("");
        }
    }
    else if(that.hasClass("address-zipcode-field")){
        validateCurrentStep()
    }
    calcTotal();
});
$(document).on("click",".default-colors-palette .color-pill",function(){
    var $t = $(this);
    $(".default-colors-palette .color-pill").removeClass("border-orange");
    $t.addClass("border-orange");
    if($t.hasClass("custom")){
        $(".frame-color-palette").addClass("d-block").removeClass("d-none");
    } else{
        $(".frame-color-palette").removeClass("d-block").addClass("d-none");
        $(".frame-color-palette .panel-frame-color[data-id='"+$t.attr("data-id")+"']").click();
    }
});
$(document).on("click",".next-step-btn:not(.add-to-cart-btn), .previous-step-btn",function(){
    if($(this).hasClass("next-step-btn")){
        if(validateCurrentStep()){
            switchSteps(true);
        }
    } else{
        switchSteps(false);
    }
});
$(document).on("click",".add-to-cart-btn",function(){
    var that = $(this);
    calcTotal(true);
});
$(document).on("keyup", ".search-color-field", function() {
    var thatField = $(this);
    var value = thatField.val();
    $(".find-color-accordion .accordion-item").fadeIn();
    $(".panel-frame-color").removeClass("d-none").addClass("d-flex");
    if (value != "") {
        // Create a regular expression from the value entered in the input field
        var regex = new RegExp(value.toLowerCase(), "i"); // 'i' for case-insensitive matching
        $(".find-color-accordion .accordion-item").hide();
        $(".panel-frame-color").each(function() {
            var that = $(this);
            var label = that.attr("data-label");
            // Check if the label matches the regex
            that.removeClass("d-flex").addClass("d-none");
            if (regex.test(label.toLowerCase())) {
                that.parents(".accordion-item").show();
                that.removeClass("d-none").addClass("d-flex");
                if($(".find-color-accordion .accordion-item").is(":visible")){
                    $(".find-color-accordion .accordion-item:visible .accordion-header .accordion-button").click()
                }
            }
        });
    }
});
$(function(){
    $(".design-panel .glass-frame").html(GlassPanel());

    var accor_HTML = "";
    var defaultColorsHTML = "";
    panelFrameColors.forEach(function(item){
        var listItem_HTML = "";
        defaultColorsHTML += defaultColorPill(item.colors[0]);
        item.colors.forEach(function(listItem){
            listItem_HTML += PanelColorListItem(listItem.hex, listItem.name, listItem.ral, listItem.price);
        });
        accor_HTML += PanelColorAccorItem("accordionExample", item.name, listItem_HTML);
    });
    defaultColorsHTML += defaultColorPill({ hex: 'linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)', name: "Custom", ral: "", price: "", type: "custom" });
    /* default color palette */
    $("#defaultColorsPalette").html(defaultColorsHTML);
    /* find-color-accordion */
    $(".find-color-accordion").html(accor_HTML);
});
