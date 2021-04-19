const dummyText = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus mi lacus, et semper ligula sodales egestas. Aliquam dictum, lacus in commodo tempus, lorem nulla tincidunt est, id fringilla ipsum orci a nulla. Vestibulum libero enim, consequat ut bibendum quis, venenatis nec enim. Pellentesque elementum vitae diam et consectetur. Phasellus justo libero, consectetur non metus non, tempor varius tortor. Nulla ultrices in urna id imperdiet. Suspendisse sit amet augue id mi semper vehicula. Nunc sit amet enim id magna luctus viverra id eget augue.',

    'Duis non congue diam. Morbi efficitur ipsum non dui vulputate, eget convallis arcu euismod. Donec rutrum in nisi sit amet ornare. Fusce scelerisque luctus dapibus. Suspendisse potenti. Curabitur eget vestibulum tellus. Duis vitae enim convallis, euismod odio at, interdum sapien. Donec turpis purus, ullamcorper et pellentesque sed, iaculis at felis.',

    'Sed ut sodales nisi, eu imperdiet sem. Integer tellus lacus, feugiat sit amet sollicitudin vestibulum, vulputate varius dolor. Nulla suscipit tincidunt ligula, at sagittis justo ornare vitae. Mauris id metus eget odio imperdiet hendrerit. Curabitur blandit lectus lectus, a ullamcorper orci tristique quis. Aenean ut lorem maximus nisl pulvinar tincidunt in ut justo. Maecenas non venenatis diam. Duis ultricies mi id massa aliquam, nec consectetur mauris ullamcorper.',

    'Nam id quam cursus, tempus risus consectetur, sollicitudin ligula. Pellentesque nec nunc commodo, facilisis velit id, sagittis enim. Praesent aliquam felis convallis, condimentum arcu vitae, lacinia purus. Nullam porttitor quam vel enim scelerisque, consequat scelerisque nisi laoreet. Cras sit amet dolor odio. Cras sapien lectus, rhoncus ut rhoncus vitae, efficitur vitae quam. Integer ac tortor varius, feugiat ligula eu, dictum nulla. Cras ac justo maximus, viverra erat quis, egestas quam. Nunc vitae tellus a diam volutpat luctus vitae sit amet nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse fringilla pellentesque nibh vel iaculis. Proin suscipit pellentesque quam, quis dictum odio aliquam ac. Maecenas et finibus dolor. Integer accumsan ac odio sed ornare. Proin malesuada posuere elit at facilisis. Pellentesque vitae accumsan enim.',

    'Mauris viverra metus et feugiat dignissim. Etiam ultricies ac augue vitae dapibus. Ut sagittis convallis varius. Morbi non ligula interdum, scelerisque elit non, tempor purus. Maecenas sit amet interdum ipsum. Nam tortor mauris, ultrices at hendrerit congue, viverra vel sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus venenatis a lacus ut volutpat. Suspendisse vitae elit et dui lacinia cursus. In hac habitasse platea dictumst. Integer at sapien sem.',

    'Aenean in ullamcorper odio. Suspendisse euismod nunc id erat viverra dapibus. Integer pharetra ipsum eget sem interdum, in feugiat dolor pellentesque. In egestas ipsum sapien, vitae interdum velit efficitur in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam volutpat erat turpis, vel porttitor metus molestie a. Nullam blandit a sem vitae molestie. Aenean tincidunt, sapien eget venenatis hendrerit, ante nisi sagittis ipsum, a fermentum ante neque sed urna. Nam sodales erat a mi lacinia cursus. Aenean et porttitor nisl, aliquet fringilla nisl. Integer sit amet lacinia nisl. Donec sit amet mollis sapien, at varius nunc. Cras quis tristique quam. Aenean ac nibh euismod, laoreet sapien ac, dapibus sem. Curabitur fringilla justo at dictum suscipit. Nunc hendrerit in tortor a laoreet.',

    'Etiam rutrum mi id purus feugiat sagittis. Mauris tellus ex, rutrum ac elementum a, semper id nibh. Donec tempor eget lacus vitae accumsan. Phasellus tincidunt ante mauris, et gravida eros tristique in. Pellentesque sodales arcu a molestie tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed rhoncus, massa et ultrices consequat, tortor enim dapibus felis, auctor posuere leo elit at urna. Pellentesque varius nisi sed nisl tincidunt fringilla. Maecenas sed risus quis ex hendrerit suscipit. In sodales lectus sit amet nisl pharetra vulputate. Vestibulum odio nibh, faucibus sed vehicula eget, ultrices et libero. Sed purus turpis, cursus nec tellus non, luctus laoreet tellus. In suscipit risus egestas enim pellentesque, et scelerisque nisi placerat.',

    'Nulla urna tortor, iaculis vitae mauris eu, ultricies congue neque. Pellentesque hendrerit neque et massa ultricies vehicula. Sed sagittis porttitor metus, vel bibendum sapien condimentum in. Fusce nec nisi pharetra, rutrum elit at, faucibus mi. Nulla facilisi. Aenean facilisis tempus leo a venenatis. Mauris varius ut risus id suscipit. Aliquam sed vulputate ipsum. Aliquam pellentesque turpis nec condimentum rhoncus. Ut sed interdum quam. Mauris vitae tellus neque. Etiam euismod cursus felis, in congue arcu sagittis ac. Maecenas at mauris in ipsum maximus vestibulum. Nullam euismod, ipsum scelerisque dapibus maximus, arcu nunc semper tortor, vitae posuere lectus sem in urna. Cras ligula ante, venenatis eleifend imperdiet ut, luctus vitae velit. Morbi vitae egestas dolor.',

    'Nunc in elit nunc. Proin eu purus id tellus tempor vehicula. Nullam accumsan eros lorem, nec lacinia erat laoreet bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum urna nulla, finibus in viverra in, cursus eget augue. Cras aliquam dictum leo et ultricies. Mauris id tortor sed felis eleifend tristique vitae ut nunc. Pellentesque dignissim euismod eros ac rhoncus. Etiam nec ligula sit amet enim dictum tristique nec vel enim. Suspendisse feugiat blandit mi, non vulputate enim semper vel. Mauris faucibus et ante nec ultricies.'
]

let form = document.querySelector('.loremForm'),
inputParagraphs = document.querySelector('.inputParagraphs'),
result = document.querySelector('.result');

form.addEventListener('submit', (e)=>{    
    e.preventDefault();
    let value = parseInt(inputParagraphs.value);
    let randomNo = Math.floor(Math.random() * dummyText.length);     

    if( value == "" || value < 0 || value > 9 ){        
        result.innerHTML = `<p>${dummyText[randomNo]}</p>`;
    }
    else{
        let tempText = dummyText.slice(0, value);
        tempText = tempText.map( text => {
            return `<p>${text}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
})