import React from 'react';
import Star from './star';
class BubbleOverlay extends google.maps.OverlayView {

    constructor(options, attraction, type) {
        // Initialize all properties.
        super(options);
        this.options = {};
        this.type = type;
        this.attraction = attraction;
        this.options.map = options.map;
        this.options.location = options.location;
        this.options.borderColor = options.borderColor || '#d6d6d6';
        this.options.borderWidth = options.borderWidth || 1;
        this.options.backgroundColor = options.backgroundColor || '#fff';
        this.options.arrowSize = options.arrowSize || 10;
        this.options.contentHeight = options.contentHeight || 70;
        this.options.contentWidth = options.contentWidth || 300;
        this.options.zIndex = options.zIndex || 1000;
        this.options.onClose = options.onClose;
        // Explicitly call setMap on this overlay.
        // this.setMap(options.map);
    }

    /**
     * Convert number to pixels
     * @param  {number} num Number to convert
     * @return {string}     Number in pixels
     */
    px(num) {
        if (num) {
            // 0 doesn't need to be wrapped
            return `${num}px`;
        }
        return num;
    }

    /**
     * onAdd is called when the map's panes are ready and the overlay has been
     * added to the map.
     */
    onAdd() {
        if (!this.bubble) {
            this.createDOMElements();
        }

        // Add the element to the "overlayLayer" pane.
        const panes = this.getPanes();
        if (panes) {
            panes.overlayMouseTarget.appendChild(this.bubble);
        }
    }

    createContent() {
        const content = document.createElement('div');
        content.style.borderStyle = 'solid';
        content.style.borderWidth = '1px';
        content.style.borderColor = this.options.borderColor;
        content.style.backgroundColor = this.options.backgroundColor;
        content.style.zIndex = this.options.zIndex;
        content.style.width = this.px(this.options.contentWidth);
        content.style.height = this.px(this.options.contentHeight);
        content.style.position = 'relative';
        const imgsrc = (this.attraction.photoUrls[0]) ? this.attraction.photoUrls[0] : window.stockURL
        const figure = document.createElement('figure');
        const a = document.createElement('a');
        a.innerHTML = `<a href="#/attractions/${ this.attraction.id }"><img src=${imgsrc}/></a>`
        figure.appendChild(a);
        const list = document.createElement('ul');
        const name = document.createElement('li');
        const rating = Math.round(this.attraction.avg_rating * 2) / 2;
        const ratingspan = Star(rating);
        
        const temp = document.createElement('li');
        temp.innerHTML = ratingspan + `<span>&nbsp;&nbsp;${this.attraction.num_rating} reviews</span>`;
        name.innerHTML = `<a href="#/attractions/${this.attraction.id}">${this.attraction.name}</a>`;
        // debugger
        list.appendChild(name);
        list.appendChild(temp);
        content.appendChild(figure);
        content.appendChild(list);

        
        if (this.type === 'hover') {
            content.className = 'bubble-overlay-hover';
        }
        else if (this.type === 'click') {
            content.className = 'bubble-overlay-click'
        }

        return content;
    }

    createCloseBtn() {
        const btn = document.createElement('div');
        btn.className = 'bubble-overlay-btn-close';

        const iconClose = document.createElement('span');
        iconClose.className = 'glyphicon glyphicon-remove';
        btn.appendChild(iconClose);

        return btn;
    }

    createArrow() {
        const arrowSize = this.options.arrowSize;
        const borderWidth = this.options.borderWidth;
        const borderColor = this.options.borderColor;
        const backgroundColor = this.options.backgroundColor;


        const arrowOuterSizePx = this.px(arrowSize);
        const arrowInnerSizePx = this.px(Math.max(0, arrowSize - borderWidth));

        const arrow = document.createElement('div');
        arrow.style.position = 'relative';
        arrow.style.marginTop = this.px(-borderWidth);

        const arrowInner = document.createElement('div');
        const arrowOuter = document.createElement('div');

        arrowOuter.style.position = arrowInner.style.position = 'absolute';
        arrowOuter.style.left = arrowInner.style.left = '50%';
        arrowOuter.style.height = arrowInner.style.height = '0';
        arrowOuter.style.width = arrowInner.style.width = '0';
        arrowOuter.style.marginLeft = this.px(-arrowSize);
        arrowOuter.style.borderWidth = arrowOuterSizePx;
        arrowOuter.style.borderStyle = arrowInner.style.borderStyle = 'solid';
        arrowOuter.style.borderBottomWidth = 0;
        arrowOuter.style.display = '';

        arrowOuter.style.borderColor = `${borderColor} transparent transparent`;
        arrowInner.style.borderColor = `${backgroundColor} transparent transparent`;

        arrowOuter.style.zIndex = this.options.zIndex + 1;
        arrowInner.style.zIndex = this.options.zIndex + 1;

        arrowOuter.style.borderTopWidth = arrowOuterSizePx;
        arrowInner.style.borderTopWidth = arrowInnerSizePx;

        arrowOuter.style.borderLeftWidth = arrowOuterSizePx;
        arrowInner.style.borderLeftWidth = arrowInnerSizePx;

        arrowOuter.style.borderRightWidth = arrowOuterSizePx;
        arrowInner.style.borderRightWidth = arrowInnerSizePx;

        arrowOuter.style.marginLeft = this.px(-(arrowSize));
        arrowInner.style.marginLeft = this.px(-(arrowSize - borderWidth));

        arrow.appendChild(arrowOuter);
        arrow.appendChild(arrowInner);

        return arrow;
    }

    /**
     * Create dom elements
     */
    createDOMElements() {
        const bubble = this.bubble = document.createElement('div');
        bubble.style.position = 'absolute';
        bubble.style.zIndex = this.options.zIndex - 1;
        bubble.style.boxShadow = '0px 0px 15px rgba(0,0,0,0.4)';

        const content = this.content = this.createContent();
        const arrow = this.arrow = this.createArrow();
        const closeBtn = this.closeBtn = this.createCloseBtn();

        closeBtn.style.zIndex = this.options.zIndex + 1000;
        closeBtn.onclick = this.options.onClose;
        bubble.appendChild(content);
        bubble.appendChild(arrow);
        bubble.appendChild(closeBtn);
    }


    /* Pan the map to fit the InfoBox.
     */
    // panMap() {
    //     // if we go beyond map, pan map
    //     const map = this.options.map;
    //     const bounds = map.getBounds();
    //     if (!bounds) return;

    //     // The position of the infowindow
    //     const position = this.options.location;

    //     // The dimension of the infowindow
    //     const iwWidth = this.options.contentWidth;
    //     const iwHeight = this.options.contentHeight;

    //     // The offset position of the infowindow
    //     const iwOffsetX = Math.round(this.options.contentWidth / 2);
    //     const iwOffsetY = Math.round(this.options.contentHeight + this.options.arrowSize + 10);

    //     // Padding on the infowindow
    //     const padX = 40;
    //     const padY = 40;

    //     // The degrees per pixel
    //     const mapDiv = map.getDiv();
    //     const mapWidth = mapDiv.offsetWidth;
    //     const mapHeight = mapDiv.offsetHeight;
    //     const boundsSpan = bounds.toSpan();
    //     const longSpan = boundsSpan.lng();
    //     const latSpan = boundsSpan.lat();
    //     const degPixelX = longSpan / mapWidth;
    //     const degPixelY = latSpan / mapHeight;

    //     // The bounds of the map
    //     const mapWestLng = bounds.getSouthWest().lng();
    //     const mapEastLng = bounds.getNorthEast().lng();
    //     const mapNorthLat = bounds.getNorthEast().lat();
    //     const mapSouthLat = bounds.getSouthWest().lat();

    //     // The bounds of the infowindow
    //     const iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
    //     const iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
    //     const iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
    //     const iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;

    //     // calculate center shift
    //     const shiftLng =
    //         (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
    //         (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
    //     const shiftLat =
    //         (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
    //         (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);

    //     // The center of the map
    //     const center = map.getCenter();

    //     // The new map center
    //     const centerX = center.lng() - shiftLng;
    //     const centerY = center.lat() - shiftLat;


    //     // center the map to the new shifted center
    //     map.setCenter(new google.maps.LatLng(centerY, centerX));
    // }

    draw() {
        // Resize the image's div to fit the indicated dimensions.
        const bubble = this.bubble;

        // Position the overlay
        const point = this.getProjection().fromLatLngToDivPixel(this.options.location);

        if (point) {
            bubble.style.left = this.px(point.x - Math.round(this.options.contentWidth / 2));
            bubble.style.top = this.px(point.y - Math.round(this.options.contentHeight + this.options.arrowSize + 30));
        }
    }

    // The onRemove() method will be called automatically from the API if
    // we ever set the overlay's map property to 'null'.
    onRemove() {
        this.bubble.parentNode.removeChild(this.bubble);
        this.bubble = null;
    }
}

export default BubbleOverlay;