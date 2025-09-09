/* variables */
var step = 1;
var scale = 0.1;
var per_Panel_width = 900; // 900mm – per mm 0.17px = 900 x 0.17 = 153px
var per_Panel_height = 3000; // 3000mm – per mm 0.12px = 3000 x 0.12 = 360px;
var file_path = window.location.protocol == "file:" ? "assets/image/":"/assets/image/";

var panelFrameColors = [
    { 
        "name": "Wit",
        "colors": [
            {
              "hex": "#E9E0D2",
              "name": "Crémewit",
              "ral": "RAL 9001"
            },
            {
              "hex": "#D6D5CB",
              "name": "Grijswit",
              "ral": "RAL 9002"
            },
            {
              "hex": "#ECECE7",
              "name": "Signaalwit",
              "ral": "RAL 9003"
            },
            {
              "hex": "#F1EDE1",
              "name": "Zuiverwit",
              "ral": "RAL 9010"
            },
            {
              "hex": "#F8F2E1",
              "name": "Ultrareine zone wit",
              "ral": "RAL 9012"
            },
            {
              "hex": "#F1F1EA",
              "name": "Verkeerswit",
              "ral": "RAL 9016"
            }
        ]
    },
    { 
        "name": "Zwart",
        "colors": [
            {
              "hex": "#000000",
              "name": "True Black",
              "ral": "RAL 9005"
            },
            {
              "hex": "#0A0A0A",
              "name": "Obsidian Black",
              "ral": "RAL 9006"
            },
            {
              "hex": "#1C1C1C",
              "name": "Carbon Shadow",
              "ral": "RAL 9007"
            },
            {
              "hex": "#2B2B2B",
              "name": "Graphite Night",
              "ral": "RAL 9008"
            },
            {
              "hex": "#3D3D3D",
              "name": "Ash Black",
              "ral": "RAL 9009"
            },
            {
              "hex": "#4F4F4F",
              "name": "Slate Black",
              "ral": "RAL 9010"
            },
            {
              "hex": "#5A5A5A",
              "name": "Smoke Charcoal",
              "ral": "RAL 9011"
            },
            {
              "hex": "#6E6E6E",
              "name": "Iron Dust",
              "ral": "RAL 9012"
            },
            {
              "hex": "#1A1A1A",
              "name": "Midnight Steel",
              "ral": "RAL 9013"
            },
            {
              "hex": "#121212",
              "name": "Deep Void",
              "ral": "RAL 9014"
            }
        ]
    },
    { 
        "name": "Grijs",
        "colors": [
            {
              "hex": "#808080",
              "name": "Classic Gray",
              "ral": "RAL 7000"
            },
            {
              "hex": "#A9A9A9",
              "name": "Dark Gray",
              "ral": "RAL 7001"
            },
            {
              "hex": "#C0C0C0",
              "name": "Silver Mist",
              "ral": "RAL 7002"
            },
            {
              "hex": "#D3D3D3",
              "name": "Light Gray",
              "ral": "RAL 7003"
            },
            {
              "hex": "#B0B0B0",
              "name": "Concrete Dust",
              "ral": "RAL 7004"
            },
            {
              "hex": "#999999",
              "name": "Industrial Smoke",
              "ral": "RAL 7005"
            },
            {
              "hex": "#696969",
              "name": "Dim Gray",
              "ral": "RAL 7006"
            },
            {
              "hex": "#585858",
              "name": "Shadow Steel",
              "ral": "RAL 7007"
            },
            {
              "hex": "#E0E0E0",
              "name": "Fog Gray",
              "ral": "RAL 7008"
            },
            {
              "hex": "#F5F5F5",
              "name": "Cloud Gray",
              "ral": "RAL 7009"
            }
        ]
    },
    {
        "name": "Bruin",
        "colors": [
            {
              "hex": "#8B4513",
              "name": "Saddle Brown",
              "ral": "RAL 8002"
            },
            {
              "hex": "#A52A2A",
              "name": "Brown",
              "ral": "RAL 8011"
            },
            {
              "hex": "#D2691E",
              "name": "Chocolate",
              "ral": "RAL 8003"
            },
            {
              "hex": "#CD853F",
              "name": "Peru",
              "ral": "RAL 8004"
            },
            {
              "hex": "#F4A460",
              "name": "Sandy Brown",
              "ral": "RAL 8007"
            },
            {
              "hex": "#D2B48C",
              "name": "Tan",
              "ral": "RAL 1001"
            },
            {
              "hex": "#BC8F8F",
              "name": "Rosy Brown",
              "ral": "RAL 8009"
            },
            {
              "hex": "#DEB887",
              "name": "Burlywood",
              "ral": "RAL 1011"
            },
            {
              "hex": "#3E2723",
              "name": "Dark Brown",
              "ral": "RAL 8017"
            },
            {
              "hex": "#8B3A3A",
              "name": "Firebrick Brown",
              "ral": "RAL 8018"
            }
        ]
    },
    {
        "name": "Blauw",
        "colors": [
            {
              "hex": "#0000FF",
              "name": "Blue",
              "ral": "RAL 5005"
            },
            {
              "hex": "#1E90FF",
              "name": "Dodger Blue",
              "ral": "RAL 5012"
            },
            {
              "hex": "#4169E1",
              "name": "Royal Blue",
              "ral": "RAL 5007"
            },
            {
              "hex": "#6495ED",
              "name": "Cornflower Blue",
              "ral": "RAL 5015"
            },
            {
              "hex": "#00BFFF",
              "name": "Deep Sky Blue",
              "ral": "Custom-Blue-01"
            },
            {
              "hex": "#4682B4",
              "name": "Steel Blue",
              "ral": "RAL 5011"
            },
            {
              "hex": "#5F9EA0",
              "name": "Cadet Blue",
              "ral": "Custom-Blue-02"
            },
            {
              "hex": "#ADD8E6",
              "name": "Light Blue",
              "ral": "Custom-Blue-03"
            },
            {
              "hex": "#00008B",
              "name": "Dark Blue",
              "ral": "RAL 5000"
            },
            {
              "hex": "#191970",
              "name": "Midnight Blue",
              "ral": "Custom-Blue-04"
            }
        ]
    }, 
    {
        "name": "Rood",
        "colors": [
            {
              "hex": "#FF0000",
              "name": "Pure Red",
              "ral": "RAL 3020"
            },
            {
              "hex": "#D10000",
              "name": "Crimson Blaze",
              "ral": "RAL 3000"
            },
            {
              "hex": "#B22222",
              "name": "Firebrick Red",
              "ral": "RAL 3002"
            },
            {
              "hex": "#DC143C",
              "name": "Crimson Flame",
              "ral": "RAL 3018"
            },
            {
              "hex": "#E34234",
              "name": "Vermilion Heat",
              "ral": "RAL 2002"
            },
            {
              "hex": "#C41E3A",
              "name": "Cardinal Red",
              "ral": "RAL 3003"
            },
            {
              "hex": "#8B0000",
              "name": "Dark Ruby",
              "ral": "RAL 3004"
            },
            {
              "hex": "#FF4C4C",
              "name": "Soft Scarlet",
              "ral": "Custom-Red-01"
            },
            {
              "hex": "#FF6347",
              "name": "Tomato Tint",
              "ral": "Custom-Red-02"
            },
            {
              "hex": "#FFA07A",
              "name": "Light Salmon Red",
              "ral": "Custom-Red-03"
            }
        ]
    },
    {
        "name": "Groen",
        "colors": [
            {
              "hex": "#008000",
              "name": "Pure Green",
              "ral": "RAL 6000"
            },
            {
              "hex": "#006400",
              "name": "Dark Forest",
              "ral": "Custom-Green-01"
            },
            {
              "hex": "#32CD32",
              "name": "Lime Green",
              "ral": "Custom-Green-02"
            },
            {
              "hex": "#00FF00",
              "name": "Neon Green",
              "ral": "Custom-Green-03"
            },
            {
              "hex": "#228B22",
              "name": "Forest Green",
              "ral": "Custom-Green-04"
            },
            {
              "hex": "#ADFF2F",
              "name": "Green Yellow",
              "ral": "Custom-Green-05"
            },
            {
              "hex": "#7CFC00",
              "name": "Lawn Green",
              "ral": "Custom-Green-06"
            },
            {
              "hex": "#9ACD32",
              "name": "Yellow Green",
              "ral": "Custom-Green-07"
            },
            {
              "hex": "#6B8E23",
              "name": "Olive Drab",
              "ral": "Custom-Green-08"
            },
            {
              "hex": "#556B2F",
              "name": "Dark Olive Green",
              "ral": "Custom-Green-09"
            }
        ]
    },
    {
        "name": "Geel",
        "colors": [
            {
              "hex": "#FFFF00",
              "name": "Yellow",
              "ral": "RAL 1023"
            },
            {
              "hex": "#FFD700",
              "name": "Gold",
              "ral": "RAL 1032"
            },
            {
              "hex": "#F0E68C",
              "name": "Khaki",
              "ral": "Custom-Yellow-01"
            },
            {
              "hex": "#FFFACD",
              "name": "Lemon Chiffon",
              "ral": "Custom-Yellow-02"
            },
            {
              "hex": "#FFFFE0",
              "name": "Light Yellow",
              "ral": "Custom-Yellow-03"
            },
            {
              "hex": "#FFEB3B",
              "name": "Yellow Bright",
              "ral": "Custom-Yellow-04"
            },
            {
              "hex": "#F9A825",
              "name": "Mustard",
              "ral": "RAL 1005"
            },
            {
              "hex": "#FFCC00",
              "name": "Amber",
              "ral": "Custom-Yellow-05"
            },
            {
              "hex": "#FFB300",
              "name": "Goldenrod",
              "ral": "Custom-Yellow-06"
            },
            {
              "hex": "#F2C300",
              "name": "Daffodil Yellow",
              "ral": "Custom-Yellow-07"
            }
        ]
    }
];

/* components */
function ErrorSpan(text = ""){
    return `<span class="error-span text-danger d-block w-100">${text}</span>`
}
function Cartitem(data){

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
                <span class="text text-dark fs-4">€${data.frametotal}</span>
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
function PanelColorListItem(color = "#000", name = "Black Color", ral = "0001"){
    return `<li class="list-group-item panel-frame-color d-flex align-items-center justify-content-between fs-6 gap-3" data-color="${color}" data-label="${name+" "+ral}">
        <span class="d-flex align-items-center w-100 gap-3">
            <span style="background-color: ${color};height: 16px;width: 32px;" class="d-inline-block rounded-pill"></span>
            <span class="d-flex align-items-center gap-2">
                <span class="text-dark text-capitalize">${name}</span>
                <span class="text text-uppercase" style="color: #999999;font-size: 14px;">${ral}</span>
            </span>
        </span>
        <span class="material-icons text-orange fs-5 active-icon">check_circle</span>
    </li>`;
}
function GlassPanel(){
    return `<div class="glass-item">
        <img src="${file_path}volume-off.svg" class="sound-proof img-fluid" />
    </div>`;
}
function GlassDoor(){
    return `<div class="door"><div class="door-glass">
        <span class="door-handle">
            <img src="${file_path}standard_door-handle.svg" />
        </span>
    </div></div>`;
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
// Helper to redistribute panel widths
function redistributePanels(total, count) {
    var panels = [];
    if(count <= 0) return panels;
    if(count === 1) { panels.push(total); return panels; }
    // Set first (count - 1) panels to full PANEL_WIDTH
    for(var i = 0; i < count - 1; i++){
      panels.push(900);
    }
    var last = total - 900 * (count - 1);
    panels.push(last);
    return panels;
}
// Helper to rotate an array so its minimum element comes first.
function rotateToMin(arr) {
    var min = Math.min.apply(null, arr);
    var idx = arr.indexOf(min);
    return arr.slice(idx).concat(arr.slice(0, idx));
}
function calcTotalData(wallWidthMm, wallHeightMm, frameTotal){
    return {
        "id": Math.random().toString(36).substr(2, 8),
        "framephoto": $("#imgResult img").attr("src")??"",
        "wallwidth": wallWidthMm,
        "walllength": wallHeightMm,
        "walltype": $(".walltype-field:checked").attr("data-label")??"",
        "glasstype": $(".glasstype-field:checked").attr("data-label")??"",
        "doorunits": $(".doorunits-field:checked").attr("data-label")??"",
        "directionofrotation": $(".directionofrotation-field:checked").attr("data-label")??"",
        "doorsill": $(".doorsill-field:checked").attr("data-label")??"",
        "lock": $(".lock-field:checked").attr("data-label")??"",
        "doorhandle": $(".doorhandle-field:checked").attr("data-label")??"",
        "framecolor": $(".panel-frame-color.active").attr("data-label")??"",
        "finishcolor": $(".finishcolor-field:checked").attr("data-label")??"",
        "measuring": $(".measuring-field:checked").attr("data-label")??"",
        "delivery": $(".delivery-field:checked").attr("data-label")??"",
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
    
    $(".glasstype-field").each(function(){
        var that = $(this);
        var doorUnit_Substract_Panel = doorunits > 0 ? glasstype : 0;
            that.parents("label").find(".count").html((Number(that.val()) * calculatedPanelCount)); 
    }); 
    $(".walltype-field").each(function(){
        var that = $(this);
        var doorUnit_Substract_Panel = doorunits > 0 ? wallType : 0;
            that.parents("label").find(".count").html((Number(that.val()) * calculatedPanelCount));
    });

    if(doorunits > 0){ 
        var dropsill_value = $(".doorsill-field:checked").val() != undefined ? Number($(".doorsill-field:checked").val()) : 0;
        var lock_value = $(".lock-field:checked").val() != undefined ? Number($(".lock-field:checked").val()) : 0;
        var doorhandle_value = $(".doorhandle-field:checked").val() != undefined ? Number($(".doorhandle-field:checked").val()) : 0;
            doorunits = doorunits + dropsill_value + lock_value + doorhandle_value;
            if(Number($(".doorunits-field:checked").val()) > 0){
                //totalPanels = totalPanels - wallType - glasstype;
            }
            
    } 

    var measuring = $(".measuring-field:checked").val() != undefined ? Number($(".measuring-field:checked").val()) : 0;
    var delivery = $(".delivery-field:checked").val() != undefined ? Number($(".delivery-field:checked").val()) : 0;
    var frameTotal = totalPanels + doorunits + measuring + delivery;

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
function createGlassPanel(){  

    // Calculation:
    var wallWidthMm = $(".wall-width-field").val() != "" ? $(".wall-width-field").val(): per_Panel_width;
    var wallHeightMm = $(".wall-length-field").val() != "" ? $(".wall-length-field").val() : per_Panel_height;
    var panelPrice = $(".walltype-field:checked").length > 0 ? Number($(".walltype-field:checked").val()): 0;

    var door_unit = $(".doorunits-field:checked").length > 0 ? Number($(".doorunits-field:checked").val()):0;
    var doorPlacement = $(".doorplacement-field:checked").length > 0 ? $(".doorplacement-field:checked").val() : $(".doorplacement-field").eq(0).val();
    var doorType = $(".doortype-field:checked").length > 0 ? $(".doortype-field:checked").val() : $(".doortype-field").eq(0).val();
    
    var doorWidth = Number($(".doordimensions-field").val()) > 0 ? Number($(".doordimensions-field").val()) : Number($(".doordimensions-field").attr("min"));

    //var offsetEnabled = $(".door-offset-field").prop("checked");
    var offsetEnabled = $(".glass-between-door-tinker-side-field").prop("checked");
    var doorOffset = Number($(".door-offset-field").val()) > 0 ? Number($(".door-offset-field").val()) : 300;
    var divideGlassesEvenly = $(".divide-glasses-evenly-field").prop("checked");

    // exactPanelCount is the visual representation (with decimals)
    var exactPanelCount = wallWidthMm / per_Panel_width; 

    // Determine how many full panels and what fraction remains for the visual.
    var fullPanelCount = Math.floor(exactPanelCount);
    var fractionalPart = exactPanelCount - fullPanelCount;

    // For pricing or ordering, use the ceiling value (decimal means an extra panel is needed)
    var calculatedPanelCount = Math.ceil(exactPanelCount);

    // For "Normal" (no door), final panels come from full redistribution:
    // Panels array: first (calcPanels - 1) full, last = wallWidth - (calcPanels-1)*PANEL_WIDTH.
    var finalSlots = []; // Each element will be an object {type: "panel"|"door"|"offset", width: mm}
    
    $(".design-panel .glass-frame").html(""); 

    
    // Cost is based on calcPanels full panels with one replaced by the door.
    var cost;
    
    /* if there is no door */
    if(door_unit == 0){
        for(i = 0; i<fullPanelCount; i++){ 
            var panelDiv = $(GlassPanel());
                panelDiv.css({
                "min-width": (per_Panel_width * scale) + "px",
                "min-height": (wallHeightMm * scale) + "px"
                });
                //panelDiv.addClass("panel").attr("data-panel",per_Panel_width+"mm");
                $(".design-panel .glass-frame").append(panelDiv);
        } 
        // Create the fractional (partial) panel if needed (only if there is a remainder)
        if (fractionalPart > 0) {
            var partialWidth = per_Panel_width * fractionalPart * scale; // width proportional to the fractional part
            var partialPanelDiv = $(GlassPanel());
                partialPanelDiv.css({
                "min-width": partialWidth + "px",
                "min-height": (wallHeightMm * scale) + "px"
                });
                //partialPanelDiv.addClass("panel").attr("data-panel",(Math.ceil(partialWidth / 100) * 100)+"mm");
            $(".design-panel .glass-frame").append(partialPanelDiv);
        }
        cost = calculatedPanelCount * panelPrice;
    }
    /* else if there is a door */
    else if(door_unit > 0){

        if(doorPlacement == "center"){
            // For door center, effective panel count remains = calculatedPanelCount - 1.
            var effCount = calculatedPanelCount - 1;   // e.g., 5 - 1 = 4
            var panelsSum = wallWidthMm - doorWidth;  // e.g., 3800 - doorWidth
            var panels = redistributePanels(panelsSum, effCount);
            // For center door, split panels into left and right halves.
            var leftCount = Math.floor(effCount / 2);
            var leftPanels = panels.slice(0, leftCount);
            var rightPanels = panels.slice(leftCount);
            // Final order: left panels, then door, then right panels.
            for(var i = 0; i < leftPanels.length; i++){
                finalSlots.push({ type: "panel", width: leftPanels[i] });
            }
            finalSlots.push({ type: "door", width: doorWidth });
            for(var i = 0; i < rightPanels.length; i++){
                // Only add if width > 0 (in case the remainder became 0)
                if(rightPanels[i] > 0)
                finalSlots.push({ type: "panel", width: rightPanels[i] });
            }
        } else if(doorPlacement == "left"){
            if(!offsetEnabled){  
                // Door left without offset: effective panels = calculatedPanelCount - 1.
                var effCount = calculatedPanelCount - 1;  
                var panelsSum = wallWidthMm - doorWidth;
                var panels = redistributePanels(panelsSum, effCount);
                // For door left, final order: door slot first, then panels.
                finalSlots.push({ type: "door", width: doorWidth });
                for(var i = 0; i < panels.length; i++){
                  // In the raw adjustment, the extra needed is (doorWidth - PANEL_WIDTH) which is implicitly subtracted from the first panel of the panels array.
                  if(panels[i] > 0){
                    finalSlots.push({ type: "panel", width: panels[i] });
                  }
                }
            }
            else { 
                // Door left with offset: effective panels = calcPanels - 2.
                var effCount = calculatedPanelCount - 2; // e.g., 5 - 2 = 3 panels
                var panelsSum = wallWidthMm - (doorWidth + doorOffset);
                var panels = redistributePanels(panelsSum, effCount);
                // Final order: [offset slot, door slot, then panels]
                finalSlots.push({ type: "offset", width: divideGlassesEvenly ? (doorOffset/2) : doorOffset });
                finalSlots.push({ type: "door", width: doorWidth }); 
                
                for(var i = 0; i < panels.length; i++){
                    if(panels[i] > 0){
                        finalSlots.push({ type: "panel", width: panels[i] });
                    }
                }
                if(divideGlassesEvenly){
                    finalSlots.push({ type: "offset", width: divideGlassesEvenly ? (doorOffset/2) : doorOffset });
                }
            }
        } else if(doorPlacement == "right"){
            if(!offsetEnabled){
                // For door right without offset: effective panels = calculatedPanelCount - 1.
                var effCount = calculatedPanelCount - 1;
                var panelsSum = wallWidthMm - doorWidth;
                var panels = redistributePanels(panelsSum, effCount);
                // For right door (without offset), we “rotate” the panels so that the smallest (partial) panel appears first.
                panels = rotateToMin(panels);
                // Final order: panels then door slot.
                for(var i = 0; i < panels.length; i++){
                    if(panels[i] > 0){
                        finalSlots.push({ type: "panel", width: panels[i] });
                    }
                }
                finalSlots.push({ type: "door", width: doorWidth });
            }
            else {
                // For door right with offset: effective panels = calcPanels - 2.
                var effCount = calculatedPanelCount - 2;
                var panelsSum = wallWidthMm - (doorWidth + doorOffset);
                var panels = redistributePanels(panelsSum, effCount);
                panels = rotateToMin(panels);
                // Final order: panels then door slot then offset slot.
                if(divideGlassesEvenly){
                    finalSlots.push({ type: "offset", width: divideGlassesEvenly ? (doorOffset/2) : doorOffset });
                }
                for(var i = 0; i < panels.length; i++){
                    if(panels[i] > 0){
                        finalSlots.push({ type: "panel", width: panels[i] });
                    }
                }
                
                finalSlots.push({ type: "door", width: doorWidth });
                finalSlots.push({ type: "offset", width: divideGlassesEvenly ? (doorOffset/2) : doorOffset });
            }
        }

        cost = ((calculatedPanelCount - 1) * panelPrice) + door_unit;
         
        
        finalSlots.forEach(function(slot){
            var GlassPanel_NODE = $(GlassPanel());
            var widthPx = slot.width * scale;
            GlassPanel_NODE.css({
              "min-width": widthPx + "px",
              "min-height": (wallHeightMm * scale) + "px",
              "max-width": widthPx + "px",
              "max-height": (wallHeightMm * scale) + "px"
            });
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
                        $(".design-panel .glass-frame").css({"border-color": findColorAccordion_li_active.attr("data-color")});
                    }
                
            }
            else if(slot.type === "offset"){
                GlassPanel_NODE.addClass("offset").attr("data-offset",slot.width+"mm");
            }
                
            $(".design-panel .glass-frame").append(GlassPanel_NODE);
        });
    }
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
        var canvaPlayGround = document.querySelector("#glassFrame");
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
    formValidation(".step.step-1",true); 
    if((width < Number($(".wall-width-field").attr("min")) || width > Number($(".wall-width-field").attr("max"))) || (height < Number($(".wall-length-field").attr("min")) || height > Number($(".wall-length-field").attr("max")))){
        formValidation(".step.step-1") 
    } else{
        createGlassPanel()
    }
});    
$(document).on("change",".walltype-field, .glasstype-field",function(){
    var that = $(this);
    calcTotal();
});
$(document).on("change keyup",".doorunits-field, .doordimensions-field, .doorplacement-field, .door-offset-field, .glass-between-door-tinker-side-field, .divide-glasses-evenly-field, .doortype-field, .directionofrotation-field",function(e){
    var that = $(this);
    var valid = false;

    if(that.hasClass("doorunits-field")){ 
        $(".door-offset-field").attr("checked",false).change();
        $(".doordimensions-field").removeAttr("required");

        if(that.prop("checked") && that.val() != 0){
            $(".door-units-options").removeClass("d-none").addClass("d-block");
            $(".doordimensions-field").attr("required",true);
            /* door-units-options each loop */
            $(".door-units-options input[type=radio]").each(function(){
                if($("input[name="+$(this).attr("name")+"]:checked").length == 0){
                    $("input[name="+$(this).attr("name")+"]:first").prop("checked",true).change();   
                }
            });
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
            $(".design-panel .glass-frame").removeAttr("style");
        } else {
            $(".find-color-accordion ul li").removeClass("active");  // Remove active from all
            that.addClass("active");  // Add active to clicked li
            $(".glass-frame .glass-item.door .door").css("--door-color", that.attr("data-color"));
            $(".glass-frame .glass-item.door").css({"background-color": that.attr("data-color")});
            $(".glass-frame .glass-item.door .door-glass").css({"border-color": that.attr("data-color")});
            $(".design-panel .glass-frame").css({"border-color": that.attr("data-color")});
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
    panelFrameColors.forEach(function(item){
        var listItem_HTML = "";
        item.colors.forEach(function(listItem){
            listItem_HTML += PanelColorListItem(listItem.hex, listItem.name, listItem.ral);
        });
        accor_HTML += PanelColorAccorItem("accordionExample", item.name, listItem_HTML);
    });
    /* find-color-accordion */
    $(".find-color-accordion").html(accor_HTML);
});