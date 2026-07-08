(() => {
    const startDate = new Date(2012, 3, 4);

    const calculateExperience = (fromDate, toDate) => {
        let years = toDate.getFullYear() - fromDate.getFullYear();
        const anniversary = new Date(toDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());

        if (toDate < anniversary) {
            years -= 1;
        }

        return { years };
    };

    const renderExperience = () => {
        const now = new Date();
        const experience = calculateExperience(startDate, now);

        document.querySelectorAll('[data-experience-years]').forEach((element) => {
            element.textContent = experience.years;
        });

        document.querySelectorAll('[data-experience-full]').forEach((element) => {
            element.textContent = `${experience.years} Years`;
        });

        document.querySelectorAll('[data-experience-since]').forEach((element) => {
            element.textContent = 'Since April 4, 2012';
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderExperience);
    } else {
        renderExperience();
    }
})();
