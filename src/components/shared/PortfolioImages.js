import landingHes from '../../assets/images/work/hes/hes-phone3.png'
import overlayHes from '../../assets/images/work/hes/screen-overlay2.png'

import landingNWO from '../../assets/images/work/nwo/nwo-laptop-cropped.png'
import overlayNWO from '../../assets/images/work/nwo/screen-overlay.png'


import landingForm from "../../assets/images/work/form/building.png"
import overlayForm from "../../assets/images/work/form/building-overlay.png"


export const portfolioImages = {
	Hes: {
		landing:landingHes,
		overlay:overlayHes,
		images:[]
	},

	NWO: {
		landing:landingNWO,
		overlay: overlayNWO,
		images:[
			{image:landingNWO, src:"laptop"},
			{image:landingNWO, src:"laptop"},
			{image:landingNWO, src:"laptop"},
		]
	},

	Form: {
		landing:landingForm,
		overlay: overlayForm,

	},
}

