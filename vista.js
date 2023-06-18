AFRAME.registerComponent("place-side-view",{
    init:function(){
        this.createPlaces();

    },
    tick:function(){
        const placeContainer= document.querySelector("#place-container");
        const{state}=placeContainer.getAttribute("tour");
        if(state=== "view" || state=== "change-view"){
            this.el.setAttribute("visible",true);
        }else{
            this.el.setAttribute("visible",false);
        }
    },
    createPlaces:function(){
        const sideViewContainer = document.querySelector("#side-view-container");
        var previewsxposition = -150;
        var previewsyposition = 30;

        for (var i =1; i <=4; i++){
            const position={
                x:(previewsxposition += 50),
                y:(previewsyposition -= 4 ),
                z:-40
            }
            const entityEl = this.createPlaceTumbnail(position,i);
            sideViewContainer.appendChild(entityEl);

        }
    },
    createPlaceTumbnail:function(position,id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("id",`place-${id}`);
        entityEl.setAttribute("geometry",{
            primitive:"circle",
            radius:2.5

        });
        entityEl.setAttribute("material",{
            src:"assets/2708.png",
            opacity:0.9
        });
        entityEl.setAttribute("position",position);
        entityEl.setAttribute("cursor-listener",{});
        return entityEl;
    },
    
})