$("#episode1").click(function() {
    $("iframe").attr("src", "https://www.youtube.com/embed/1QKNx4lZaBI?si=0tbsmh7WRzC2-ZPA");
});

$("#episode2").click(function() {
    $("iframe").attr("src", "https://www.youtube.com/embed/hLhyIvwSkx4?si=0sPb26NYYRby3ah9");
});

$("#episode3").click(function() {
    $("iframe").attr("src", "https://www.youtube.com/embed/RyQcDJkwW04?si=1EncE0zKkYrsyfzC");
});


document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var comment = document.getElementById('comment-input').value;
    // Here you can send the comment to your server
    // For now, just display it
    var commentsSection = document.getElementById('comments-section');
    commentsSection.innerHTML += '<p>' + comment + '</p>';
    document.getElementById('comment-input').value = ''; // Clear the textarea
});
