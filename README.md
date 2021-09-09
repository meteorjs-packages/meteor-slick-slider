### Meteor slick slider 

Slickjs slider for meteorjs 

> slickjs version : 1.8.1


> This package hasn't entered the atmosphere yet
> you can clone this package inside folder packages in your meteorjs project


Minimal use

```
Template.yourTemplateName.onRendered(function() {
	$('#your-slider').slick({
		infinite: true,
		arrows: false,
		dots: false,
		autoplay: false,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
	  });
});
```
Event next slide

```
$('.btn-next').click(() => {
	$('#your-slider').slick('slickNext')
})
```

Get data slide after change
```
$('#your-slider').on('afterChange', function(event, slick, currentSlide){
	// todo
});
```

Get data slide before change
```
$('#your-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// todo
});
```

Please read for official doc from slickjs: [Documentation](https://kenwheeler.github.io/slick/#getting-started)