$(document).ready(function() {
    const questionElement = $('.main-question');
    const cardsContainer = $('.cards-container');
    const cards = $('.card');
    let hasQuestionChanged = false;
    let hasCardsFlipped = false;

    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        // Show cards at 50vh
        if (scrollPosition > windowHeight * 0.5 && !cardsContainer.hasClass('show')) {
            cardsContainer.addClass('show');
        }
        
        // Change question text at 150vh
        if (scrollPosition > windowHeight * 1.5 && !hasQuestionChanged) {
            questionElement
                .text('你想清楚答案了嗎？')
                .addClass('question-change');
            hasQuestionChanged = true;
        }
        
        // Flip cards at 250vh
        if (scrollPosition > windowHeight * 2.5 && !hasCardsFlipped) {
            cards.addClass('flip');
            hasCardsFlipped = true;
        }
    });
});
