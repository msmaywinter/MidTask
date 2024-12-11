document.addEventListener("DOMContentLoaded", function () {
    const jsonData = {
            "tools": [
                {
                    "id": 1,
                    "name": "Visual Studio Code",
                    "category": "פיתוח",
                    "description": "סביבת פיתוח מודרנית ורבת תכלית",
                    "logo": "images/vscode.png",
                    "details": "Visual Studio Code הוא עורך קוד חוצה פלטפורמות המיועד למפתחים מתחילים ומתקדמים. הוא מציע תמיכה רחבה בשפות כמו Python, JavaScript ו-Java, וכולל כלים שימושיים כמו ניפוי שגיאות מובנה וניהול גרסאות. סטודנטים ימצאו אותו שימושי במיוחד בתכנון והקמת פרויקטים מורכבים בזכות הפשטות והעוצמה שהוא מציע.",
                    "url": "https://code.visualstudio.com/"
                },
                {
                    "id": 2,
                    "name": "GitHub",
                    "category": "פיתוח",
                    "description": "פלטפורמה לניהול גרסאות ושיתוף קוד",
                    "logo": "images/github.png",
                    "details": "GitHub היא פלטפורמה נהדרת לניהול ושיתוף קוד בין צוותים. סטודנטים יכולים להשתמש בה כדי לשתף פעולה על פרויקט הגמר שלהם, לשמור גרסאות קוד ולעקוב אחר שינויים. בנוסף, GitHub מציעה כלים לניהול פרויקטים המאפשרים לעקוב אחרי משימות ולבצע אינטגרציה עם שירותים נוספים.",
                    "url": "https://github.com/"
                },
                {
                    "id": 3,
                    "name": "Docker",
                    "category": "תשתיות",
                    "description": "פלטפורמת קונטיינרים להרצת אפליקציות",
                    "logo": "images/docker.png",
                    "details": "Docker הוא כלי חיוני לפרויקטים שמתבצעים בסביבות עבודה מגוונות. סטודנטים יכולים להשתמש בו כדי ליצור סביבת פיתוח מבודדת המבטיחה שהאפליקציה תעבוד בצורה זהה בכל מחשב. זה יכול לעזור במיוחד בפרויקטים שבהם עובדים עם טכנולוגיות מרובות או ספריות תלויות.",
                    "url": "https://www.docker.com/"
                },
                {
                    "id": 4,
                    "name": "MongoDB",
                    "category": "תשתיות",
                    "description": "מסד נתונים NoSQL מודרני",
                    "logo": "images/mongodb.png",
                    "details": "MongoDB הוא מסד נתונים גמיש שמתאים לפרויקטים שמתמודדים עם נתונים משתנים ודינמיים. סטודנטים יכולים להשתמש בו לפרויקט גמר שדורש ניהול מסדי נתונים מבוססי JSON או אפליקציות אינטרנט עם כמויות נתונים גדולות ומגוונות.",
                    "url": "https://www.mongodb.com/"
                },
                {
                    "id": 5,
                    "name": "Jira",
                    "category": "ניהול",
                    "description": "מערכת לניהול פרויקטים ומשימות",
                    "logo": "images/jira.png",
                    "details": "Jira היא מערכת לניהול פרויקטים המסייעת בתכנון וביצוע משימות בצורה מסודרת. סטודנטים יכולים להשתמש בה כדי לעקוב אחרי שלבי פרויקט הגמר, לשתף משימות בין חברי הצוות ולנהל את הזמן בצורה יעילה. הכלי מתאים במיוחד לפרויקטים עם תהליכים מבוססי Agile.",
                    "url": "https://www.atlassian.com/software/jira"
                },
                {
                    "id": 6,
                    "name": "GitLab",
                    "category": "ניהול",
                    "description": "פלטפורמה לניהול קוד ושיתוף פעולה בצוותים",
                    "logo": "images/gitlab.png",
                    "details": "GitLab הוא כלי המשלב ניהול קוד ושיתוף פעולה עם כלים אוטומטיים כמו CI/CD. סטודנטים בפרויקט הגמר יכולים להשתמש בו כדי לבדוק ולשלב קוד באופן רציף, ולנהל גרסאות בצורה מקצועית. הכלי מספק גם כלים לניהול צוותים ומשימות.",
                    "url": "https://about.gitlab.com/"
                },
                {
                    "id": 7,
                    "name": "Postman",
                    "category": "בדיקות",
                    "description": "כלי לבדיקת API",
                    "logo": "images/postman.png",
                    "details": "Postman הוא כלי מעולה לפיתוח ובדיקת ממשקי API. סטודנטים יכולים להשתמש בו כדי לוודא שאינטגרציות בין רכיבי התוכנה בפרויקט הגמר פועלות כראוי. הכלי כולל תכונות כמו אוטומציה של בדיקות ותיעוד API, שיכולות לחסוך זמן ולשפר את איכות הפרויקט.",
                    "url": "https://www.postman.com/"
                },
                {
                    "id": 8,
                    "name": "Swagger",
                    "category": "בדיקות",
                    "description": "כלי לתיעוד ובדיקת API",
                    "logo": "images/swagger.png",
                    "details": "Swagger הוא כלי שמאפשר ליצור תיעוד קל לקריאה ושימוש עבור API. סטודנטים יכולים להשתמש בו כדי להדגים את הממשקים שהם פיתחו בפרויקט הגמר, ולוודא שהם עונים על כל הדרישות של האפליקציה או הצוות.",
                    "url": "https://swagger.io/"
                },
                {
                    "id": 9,
                    "name": "Kubernetes",
                    "category": "תשתיות",
                    "description": "מערכת לניהול והפצת קונטיינרים",
                    "logo": "images/kubernetes.png",
                    "details": "Kubernetes הוא כלי מתקדם לניהול והפצת קונטיינרים, שמתאים לפרויקטים מבוססי ענן או מיקרו-שירותים. סטודנטים יכולים להשתמש בו כדי לפרוס את האפליקציה שלהם בסביבות עבודה שונות, לנהל סקיילינג ולנטר את הביצועים.",
                    "url": "https://kubernetes.io/"
                },
                {
                    "id": 10,
                    "name": "Terraform",
                    "category": "תשתיות",
                    "description": "כלי לניהול תשתיות כקוד",
                    "logo": "images/terraform.png",
                    "details": "Terraform הוא כלי לניהול תשתיות בצורה אוטומטית באמצעות קוד. סטודנטים יכולים להשתמש בו כדי להגדיר תשתיות כמו שרתים ומסדי נתונים בצורה מהירה ונוחה, ולחסוך זמן בתכנון הסביבה לפרויקט הגמר.",
                    "url": "https://www.terraform.io/"
                }
            ]
        };
    
    jsonLoop(jsonData.tools);
    
    radioButtonsFunctionality();
    
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.trim().toLowerCase();
        const filteredTools = jsonData.tools.filter(tool =>
            tool.name.toLowerCase().includes(searchValue)
        );
        jsonLoop(filteredTools);
    });
    
    function jsonLoop(tools) {
        const container = document.getElementById("tools-container");
        container.innerHTML = "";

        tools.forEach(tool => {
            const column = document.createElement("div");
            column.classList.add("col-12", "col-md-6", "custom-col-lg", "mb-4");
            
            const card = document.createElement("div");
            card.classList.add("card", "h-100");
            
            const img = document.createElement("img");
            img.classList.add("card-img-top");
            img.src = tool.logo;
            img.alt = `${tool.name} Logo`;
            img.addEventListener("click", () => detailsModal(tool));
            
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            
            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = tool.name;
            title.addEventListener("click", () => detailsModal(tool));
            
            const description = document.createElement("p");
            description.classList.add("card-text");
            description.textContent = tool.description;
            
            cardBody.appendChild(title);
            cardBody.appendChild(description);
            card.appendChild(img);
            card.appendChild(cardBody);
            column.appendChild(card);
            
            container.appendChild(column);
        });
    }
    
    function radioButtonsFunctionality() {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        
        const labels = document.querySelectorAll('.btn'); // תופס את כל התוויות

        radioButtons.forEach((radio) => {
            radio.addEventListener("click", () => {
                
                labels.forEach(label => label.classList.remove('active'));
                
                const selectedLabel = radio.parentElement;
                selectedLabel.classList.add('active');
                
                const selectedValue = radio.value;
                selectCategory(selectedValue);
            });
        });
    }
    
    function selectCategory(value) {
        const filteredTools = jsonData.tools.filter(tool => value === "הכל" || tool.category === value);
        jsonLoop(filteredTools);
    }

    function detailsModal(tool) {
        const modal = document.createElement("div");
        modal.classList.add("modal", "fade");
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("role", "dialog");

        const modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog", "modal-dialog-centered");
        modalDialog.setAttribute("role", "document");

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        
        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");
        const modalTitle = document.createElement("h5");
        modalTitle.classList.add("modal-title");
        modalTitle.textContent = tool.name;

        const closeButton = document.createElement("button");
        closeButton.classList.add("btn-close");
        closeButton.setAttribute("aria-label", "Close");

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeButton);
        
        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        modalBody.textContent = tool.details;
        
        const modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer");
        const linkButton = document.createElement("a");
        linkButton.classList.add("btn", "btn-primary");
        linkButton.href = tool.url;
        linkButton.textContent = "מעבר לאתר";
        linkButton.target = "_blank";

        modalFooter.appendChild(linkButton);
        
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        
        document.body.appendChild(modal);
        
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        const backdrop = document.createElement("div");
        backdrop.classList.add("modal-backdrop", "fade", "show");
        document.body.appendChild(backdrop);
        
        closeButton.addEventListener("click", () => {
            modal.classList.remove('show');
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            backdrop.classList.remove('modal-backdrop', 'fade');
            modal.remove();
        });
    }
    window.addEventListener("scroll", function () {
        const button = document.getElementById("back-to-top");
        if (window.scrollY > 200) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
    
    document.getElementById("back-to-top").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.querySelector(".navbar-toggler").addEventListener("click", function () {
        const navbarNav = document.getElementById("navbarNav");
        const navIcon = document.getElementById("nav-icon");
        const navClose = document.getElementById("nav-close");

        if (navbarNav.classList.contains("show")) {
            navbarNav.classList.remove("show");
            navIcon.style.display = "block";
            navClose.style.display = "none";
        } else {
            navbarNav.classList.add("show");
            navIcon.style.display = "none";
            navClose.style.display = "block";
        }
    });
    
});
