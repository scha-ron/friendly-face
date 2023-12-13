document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('freiburgLink').addEventListener('click', function() {
        document.getElementById('map').querySelector('iframe').src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d341806.86496488424!2d7.79642!3d47.987311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911b26560bd665%3A0x41f6bb7a5df57b0!2sFreiburg%20im%20Breisgau!5e0!3m2!1sen!2sde!4v1702294865102!5m2!1sen!2sde";
    });

    document.getElementById('furtwangenLink').addEventListener('click', function() {
        document.getElementById('map').querySelector('iframe').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170703.02503000738!2d8.041751496530296!3d48.047804703473204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790e91f04662ccf%3A0x41f6bb7a5df88d0!2s78120%20Furtwangen!5e0!3m2!1sen!2sde!4v1702294931548!5m2!1sen!2sde";
    });

    document.getElementById('titiseeLink').addEventListener('click', function() {
        document.getElementById('map').querySelector('iframe').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171051.41348593947!2d8.025880116439346!3d47.94260545800989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790f1d9539c09e7%3A0xa1511d05963ae6b0!2s79822%20Titisee-Neustadt!5e0!3m2!1sen!2sde!4v1702294962358!5m2!1sen!2sde";   
    });

    document.getElementById('rustLink').addEventListener('click', function() {
        document.getElementById('map').querySelector('iframe').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42498.63432176217!2d7.676252892474784!3d48.26120599159889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47913981b6a81ead%3A0x41f6bb7a5df8620!2s77977%20Rust!5e0!3m2!1sen!2sde!4v1702294995240!5m2!1sen!2sde";
    });

    document.getElementById('emmendingenLink').addEventListener('click', function() {
        document.getElementById('map').querySelector('iframe').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85227.61290337816!2d7.77990473046993!3d48.122524499189474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791189a90ab1a17%3A0x8d2009eb3367c837!2s79312%20Emmendingen!5e0!3m2!1sen!2sde!4v1702295031891!5m2!1sen!2sde";
    });

    // Add event listeners for other locations in a similar way
});
