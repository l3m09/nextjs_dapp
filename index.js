function nextjs_dapp(options){
	let images = document.queryselectorAll('.nextjs_dapp');

	if (options.shadow_type === 'hard')
		options.shadow_type = '0px'
	else
		options.shadow_type = '15px'

	images.forEach(image => {
		image.style.boxshadow = '10px 10 px ${options.shadow_type} 1px rgba(0,0,0,0.12)';

			if(options.padding){
				image.style.padding = 'lem';
			}
	})		
}

module.exports.nextjs_dapp = nextjs_dapp;