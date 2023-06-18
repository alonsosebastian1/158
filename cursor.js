AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLibEvents();
        this.handleClickEvents();
    },
    handleClickEvents:function(){
    this.el.addEventListener("click",evt =>{
        const placeContainer = document.querySelector("#place-container");
        const {state} = placeContainer.getAttribute("tour");
        if(state === "place-list"){
            const id = this.el.getAttribute("id");
            const placesId = ["tag-mahal","budapest","paris","new-york"];
            if(placesId.includes(id)){
                placeContainer.setAttribute("tour",{
                    state:"view",
                    selectedCard:id
                })
            }
        }
        if(state === "view"){
            this.handleViewState();
        }
        if(state === "change-view"){
            this.handleViewState();
        }
    })
    },
    handleViewState:function(){
        const el = this.el;
        const id = el.getAttribute("id");
        const placeContainer = document.querySelector("#place-container");
        const {selectedItemId} = placeContainer.getAttribute("cursor-listener");
        const sideViewPlaceId = ["place-1","place-2","place-3","place-4"];
        if(sideViewPlaceId.includes(id)){
            placeContainer.setAttribute("tour",{
                state:"changeView"
            });
            const skyEl = document.querySelector("#main-container");
            skyEl.setAttribute("material",{
                src:`./assets/360_images/${selectedItemId}/${id}.jpg`,color:"white"
            })
        }
    },
    handlePlacesListState:function(){
        const id = this.el.getAttribute("id");
        const placesId=["tag-mahal","budapest","paris","new-york"];
        if(placesId.includes(id)){
            const placeContainer=document.querySelector("#place-container");
            placeContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            });
            this.el.setAttribute("material",{
                color:"white",
                opacity:1
            });
           
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState();
        })
    },
    handleMouseLibEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId}=this.data;
            if(selectedItemId){
                const el =document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if(id === selectedItemId){
                    el.setAttribute("material",{
                        color:"grey",opacity:1
                    })
                }
            }
        })
    }
})