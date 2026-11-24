// data.js - All project data in one place

const worksData = [

    {
        id: 10,
        title: {
            en: "Sports Hub — Live Football Platform",
            ar: "منصة الرياضة — منصة كرة القدم المباشرة"
        },
        date: "2026-06-01",
        description: {
            en: "Built a full-stack football platform covering 5 major leagues with live match data, user voting, predictions, and a points-based engagement system.",
            ar: "بناء منصة كرة قدم متكاملة تغطي 5 دوريات كبرى، مع بيانات المباريات المباشرة، وتصويت المستخدمين، والتوقعات، ونظام نقاط تفاعلي."
        },
        detailedDescription: {
            en: "Developed a modern football companion app powered by the API-Football service, delivering real-time data across 5 major leagues. Architected the backend with Clean Architecture principles using ASP.NET Core and PostgreSQL, ensuring separation of concerns, testability, and long-term maintainability. Implemented core features including today's matches, live match statistics, league standings, match predictions, and a voting system for the best player of the match. Designed a user points system that rewards engagement and accuracy, encouraging repeat visits and community interaction. Built the frontend with Next.js for fast, SEO-friendly, server-rendered pages and a smooth, responsive user experience.",
            ar: "تطوير تطبيق كرة قدم حديث مدعوم بخدمة API-Football، يوفّر بيانات فورية لـ 5 دوريات كبرى. تمت هندسة الواجهة الخلفية وفق مبادئ Clean Architecture باستخدام ASP.NET Core وPostgreSQL، لضمان فصل المسؤوليات وقابلية الاختبار وسهولة الصيانة على المدى الطويل. تضمّنت الميزات الأساسية: مباريات اليوم، وإحصائيات المباريات المباشرة، وترتيب الدوريات، وتوقعات المباريات، ونظام تصويت لاختيار أفضل لاعب في المباراة. كما تم تصميم نظام نقاط للمستخدمين يحفّز على التفاعل والدقة، ويعزز عودة الزوار وتفاعل المجتمع. تم بناء الواجهة الأمامية باستخدام Next.js لتقديم صفحات سريعة ومتوافقة مع محركات البحث وصفحات مُعالجة على الخادم، مع تجربة استخدام سلسة ومتجاوبة."
        },
        image: "images/projects/project10/main.png",
        images: [
            "images/projects/project10/main.png",
            "images/projects/project10/gallery1.png",
            "images/projects/project10/gallery2.png",
            "images/projects/project10/gallery3.png",
             "images/projects/project10/gallery4.png",
              "images/projects/project10/gallery5.png",
                "images/projects/project10/gallery6.png"
            
        ],
        video: "",
        link: "#",
        github: "",
        liveDemo: null,
        technologies: ["C#", "ASP.NET Core", "PostgreSQL", "Next.js", "REST API", "Clean Architecture"],
        category: "web"
    },

    {
        id: 1,
        title: {
            en: "Transport Bill Management System",
            ar: "نظام ادارة فواتير النقل"
        },
        date: "2024-01-01",
        description: {
            en: "The transportation management system was developed for Berfin Office, with implementation of invoicing logic, tracking of account movement, and financial reconciliation between multiple offices.",
            ar: "تم تطوير نظام إدارة النقل لشركة برفين أوفيس، مع تنفيذ منطق الفواتير، وتتبع حركة الحسابات، والمصالحة المالية بين المكاتب المتعددة."
        },
        detailedDescription: {
            en: "System Features: - Support for multiple invoice types (shipping, aviation, Visa) - Expense invoices linked to each of the above invoice types - General expense invoices - Money transfer and receipt invoices - Advanced permissions system - Printing of payment notices and invoice receipts",
            ar: "ميزات النظام :- دعم انواع فواتير متعددة (شحن - طيران - فيزا) - فواتير مصروفات مرتبطة بكل نوع من الفواتير السابقة - فواتير مصروفات عامة - فواتير ارسال حوالة و استلام حوالة - نظام صلاحيات متقدم -طباعة اشعار القبض و وصل الفاتورة"
        },
        image: "images/projects/project1/main.png",
        images: [
            "images/projects/project1/main.png",
            "images/projects/project1/gallery1.png",
            "images/projects/project1/gallery2.png",
            "images/projects/project1/gallery3.png"
        ],
        video: "",
        link: "#",
        github: "",
        liveDemo: "",
        technologies: ["C#", "ASP.NET Core", "Angular", "SQL Server", "Entity Framework"],
        category: "web"
    },
    {
        id: 2,
        title: {
            en: "Pharmaceutical laboratory platform",
            ar: "منصة معمل أدوية"
        },
        date: "2024-01-01",
        description: {
            en: "Engineered an automated pharmaceutical laboratory platform with ASP.NET Core API (backend), SignalR (real-time notifications), and Angular (frontend)",
            ar: "منصة مختبر صيدلاني آلي باستخدام واجهة برمجة تطبيقات ASP.NET Core (الواجهة الخلفية)، وSignalR (الإشعارات الفورية)، وAngular (الواجهة الأمامية)."
        },
        detailedDescription: {
            en: "Engineered an automated pharmaceutical laboratory platform with ASP.NET Core API (backend), SignalR (real-time notifications), and Angular (frontend),Led the implementation of robust role-based authorization and secure data handling,Collaborated closely with QA and product stakeholders to meet project milestones and customer requirements.",
            ar: "تصميم وتطوير منصة معمل أدوية آلي باستخدام ASP.NET Core API (لواجهة الخلفية)، وSignalR (للإشعارات الفورية)، وAngular (لواجهة الواجهة الأمامية). , قيادة تنفيذ نظام تفويض قوي قائم على الأدوار ومعالجة آمنة للبيانات.,التعاون الوثيق مع فرض الجودة وأصحاب المصلحة في المنتج لتحقيق مراحل المشروع ومتطلبات العملاء."
        },
        image:  "images/projects/project2/main.png",
        images: [
            "images/projects/project2/main.png",
            "images/projects/project2/gallery1.png",
            "images/projects/project2/gallery2.png",
            "images/projects/project2/gallery3.png"
        ],
        video: "https://www.youtube.com/embed/GLuk5A11ojA?si=k2IRotQfdnc6BfVa",
        link: "#",
        github: "",
        liveDemo: null,
        technologies: ["C#", "ASP.NET Core API 6","Angular15", "Entity Framework", "SQL Server", "Signal R"],
        category: "web"
    },
    {
        id: 3,
        title: {
            en: "Professional accounting and inventory software",
            ar: "برنامج محاسبة ومخزون احترافي"
        },
        date: "2022-01-01",
        description: {
            en: "A comprehensive solution for managing your business professionally and easily. Accounting and inventory software specifically designed to meet the needs of merchants and shop owners.",
            ar: "حل متكامل لإدارة أعمالك بكل احترافية وسهولة. برنامج محاسبة ومخزون مصمم خصيصاً لتلبية احتياجات التجار وأصحاب المحلات التجارية"
        },
        detailedDescription: {
            en: "Integrated Inventory Management, Registration and Coding of Materials and Products, Tracking Inventory Movement (In/Out), Low-Stock Alerts, Category and Classification Management, Comprehensive Accounting System, Management of Customer and Supplier Accounts, Organized Receipt and Payment Vouchers, Professional Purchase and Sales Invoices, Detailed Financial Reports, Users and Permissions System, Multiple User Levels, Specific Permissions for Each User, User Activity Tracking, Reports and Analytics, Sales and Purchases Reports, Inventory Movement Reports, Customer Accounts Reports, Profit and Loss Reports",
            ar: "إدارة المخزون المتكاملة، تسجيل وترقيم المواد والمنتجات، تتبع حركة المخزون (دخول/خروج)، تنبيهات نفاذ الكميات، إدارة الفئات والتصنيفات، النظام المحاسبي الشامل، إدارة حسابات العملاء والموردين، سندات القبض والصرف المنظمة، فواتير الشراء والمبيعات المحترفة، تقارير مالية مفصلة، نظام المستخدمين والأذونات، مستويات مستخدمين متعددة، صلاحيات محددة لكل مستخدم، تتبع حركة المستخدمين، التقارير والتحليلات، تقارير المبيعات والمشتريات، تقارير حركة المخزون، تقارير حسابات العملاء، تقارير أرباح وخسائر"
        },
        image:   "images/projects/project3/main.png",
        images: [
            "images/projects/project3/main.png",
            "images/projects/project3/gallery1.png",
            "images/projects/project3/gallery2.png",
            "images/projects/project3/gallery3.png",
            "images/projects/project3/gallery4.png",
            "images/projects/project3/gallery5.png",
        ],
        video: "https://www.youtube.com/embed/iU7wcH2kUXs?si=ROMp7auUPb85LuU8",
        link: "#",
        github: "",
        liveDemo: "",
        technologies: ["WPF", "C#", "SQL Server", "XAML", "MVVM"],
        category: "desktop"
    },
    {
        id: 4,
        title: {
            en: "Charity Management Desktop Application",
            ar: "تطبيق مكتبي لإدارة المؤسسات الخيرية"
        },
        date: "2023-01-01",
        description: {
            en: "Developed a comprehensive desktop application to manage a charitable foundation delivering services in dental care, tuition assistance, and grant programs.",
            ar: "تطبيق مكتبي شامل لادارة مؤسسة خيرية تقدم خدمات في مجال علاجات الأسنان و الأقساط و المنح "
        },
        detailedDescription: {
            en: "Developed and deployed a full-stack Charity Management Platform that automated institutional workflows, financial tracking, and donation lifecycle management. Implemented balance and donor reports reducing administrative workload by over 60% and improving fund reporting accuracy.",
            ar: "تم تطوير ونشر منصة شاملة (Full-Stack) لإدارة المؤسسات الخيرية قامت بأتمتة سير العمل المؤسسي، والتتبع المالي، وإدارة دورة حياة التبرعات. تم تنفيذ تقارير الأرصدة والتقارير الخاصة بالمتبرعين، مما أدى إلى تقليل العبء الإداري بأكثر من 60٪ وتحسين دقة التقارير المالية."
        },
        image:  "images/projects/project4/main.png",
        images: [
            "images/projects/project4/main.png",
            "images/projects/project4/gallery1.png",
            "images/projects/project4/gallery2.png",
        ],
        video: "",
        link: "#",
        github: "",
        liveDemo: "",
        technologies: ["WPF", "C#", "SQL Server"],
        category: "desktop"
    },
    {
        id: 5,
        title: {
            en: "Document Management Desktop Application",
            ar: "تطبيق مكتبي لأرشفة الوثائق و المسح الضوئي"
        },
        date: "2017-01-01",
        description: {
            en: "Document Archiving Software: Electronically archive and organize paper files.",
            ar: "برنامج ارشفة الملفات : أرشفة و تنظيم الملفات الورقية الكترونياً . "
        },
        detailedDescription: {
            en: "Manage subfolders belonging to each document, which will contain the archived files. Support for a wide range of scanners that support WIA and TWAIN technologies. Support for scanning through multiple profiles, managed by the software user. Scanning can be done either through the device interface or without it (quick scan). Archived files can be saved in multiple formats (JPG, PDF, ...). Perform edits on the archived file (crop, rotate, adjust brightness, ...). Operate on a local area network (LAN).",
            ar: "ادارة المجلدات الفرعية التابعة لكل وثيقة و التي سوف تحتوي على المفات المؤرشفة , دعم شريحة واسعة من أجهزة المسح الضوئي التي تدعم تقنية WIA ,TWAIN ,دعم المسح من خلال عدة نماذج (Pofiles) والتي يديرها مستخدم البرنامج ,المسح اما من خلال واجهة الجهاز أو بدونها(مسح سريع) ,حفظ الملفات المؤرشفة بعدة صيغ (jpg,pdf,.......),اجراء التعديلات على الملف المؤرشف (قص ، تدوير، سطوع....),العمل على الشبكة المحلية"
        },
        image:   "images/projects/project5/main.jpg",
        images: [
            "images/projects/project5/main.jpg",
            "images/projects/project5/gallery1.jpg",
            "images/projects/project5/gallery2.jpg"
        ],
        video: "https://www.youtube.com/embed/39ejRXTitvY?si=-lySh41tjhvQtasJ",
        link: "#",
        github: "",
        liveDemo: "",
        technologies: [ "Winforms", "C#", "SQL Server"],
        category: "desktop"
    },
    {
        id: 6,
        title: {
            en: "Desktop Application for Shipping and Goods Import Company",
            ar: "تطبيق سطح مكتبي لشركة شحن واستيراد بضائع"
        },
        date: "2020-01-01",
        description: {
            en: "desktop application for a shipping and goods import company (This software is the exclusive property of EUKNET).",
            ar: "تطبيق سطح مكتبي لشركة شحن واستيراد بضائع((البرنامج خاص و ملك لشركة EUKNET)) "
        },
        detailedDescription: {
            en: "Multi-Branch Support: Designed for use across multiple branches, with dedicated user accounts for each branch.,Role-Based Access Control:,Features two distinct permission levels: ADMIN and USER.,Agent Management: Supports multiple company-affiliated offices (Agents),designated to receive shipments.,Shipment Management:,Includes a Validation and coding system for shipment-specific information.,Capable of printing shipment codes, either formatted as a Customer Invoice or as a shipping Label.,Centralized Dashboard: A,comp,ehensive control panel providing an overview of all software functions.,Reporting System: Includes a robust reporting module with the ability to export data to Excel.",
            ar: "ا،متعدد الفروع و لكل فرع مستخدموه الخاصون به مع نوعين من الصلاحيات (ADMIN-USER)،تعدد المكاتب (Agents) التابعة للشركة و التي ستستلم الشحنات،نظام Validation و تكويد للمعلومات الخاصة بالشحنة،طباعة كود الشحنة على شكل فاتورة العميل أو على شكل label، لوحة تحكم شاملة لجميع جزئيات البرنامج ، نظام تقارير و تصدير الى excel"
        },
        image:   "images/projects/project6/main.png",
        images: [
            "images/projects/project6/main.png",
            "images/projects/project6/gallery1.png",
            "images/projects/project6/gallery2.png",
            "images/projects/project6/gallery3.png"
        ],
        video: "https://www.youtube.com/embed/MAwlGYpVrb4?si=kogZvMHrC9qEdtqI",
        link: "#",
        github: "",
        liveDemo: "",
        technologies: ["C#", "SQL Server", "WPF","MVVM"],
        category: "desktop"
    },
    {
        id: 7,
        title: {
            en: "Engineers Offices Committee Software",
            ar: "برنامج خاص بلجنة المكاتب الهندسية"
        },
        date: "2018-01-01",
        description: {
            en: "Engineers Offices Committee Software (This Application is the exclusive property of Engineers Offices Committee - homs).",
            ar: "برنامج خاص بلجنة المكاتب الهندسية بنقابة المهندسين السوريين فرع حمص "
        },
        detailedDescription: {
            en: "Services provided by the software:Management of data for engineers registered with the engineering offices, including calculating the engineer's score and ceiling in square meters.,Management of engineering licenses, calculation of their value, and distribution of the license value among participating engineers.,Registration of engineering contracts and distribution of contract disbursements among the participating engineers.,Numerous reports specific to each module of the software, along with many other features.",
            ar: "الخدمات التي يقدمها البرنامج : ادارة بيانات المهندسين المسجلين في المكاتب الهندسية و حساب علامة و سقف المهندس من الأمتار، و ادارة الرخص الهندسية و حساب قيمتها و توزيع قيمة الرخصة على المهندسين المشاركين ، اضافة الى تسجيل العقود الهندسية و توزيع صرفيات العقد على المهندسين المشاركين ، اضافة الى العديد من التقارير الخاصة بكل وحدة من البرنامج و العديد من الميزات الأخرى"
        },
        image:  "images/projects/project7/main.jpg",
        images: [
            "images/projects/project7/main.jpg",
            "images/projects/project7/gallery1.jpg",
            "images/projects/project7/gallery2.jpg",
            "images/projects/project7/gallery3.jpg"
        ],
        video: "https://www.youtube.com/embed/quREqmTGm0k?si=dWC_N0Vjm8Htiixg",
        link: "#",
        github: "",
        liveDemo: "",
        technologies: [ "C#", "WPF", "SQL Server"],
        category: "desktop"
    },
    {
        id: 8,
        title: {
            en: "Employee Salary Management Application",
            ar: "تطبيق إدارة رواتب العاملين"
        },
        date: "2021-01-01",
        description: {
            en: "This is an application that facilitates the management of employee data, in addition to calculating monthly salaries and generating related reports",
            ar: "هو تطبيق يؤمن ادارة بيانات العاملين بالإضافة الى احتساب الرواتب الشهرية و توليد التقارير المرتبطة "
        },
        detailedDescription: {
            en: "Key Features:Employee Data Management,Management of advances, deductions, and leave,Management of the daily attendance schedule for employees,Ability to import attendance data from a biometric device (ZKTeco) and merge it with the daily attendance schedule,Automatic registration of late arrival penalties based on the employee's attendance schedule,Payroll Management:,Create and delete salary records,Generate individual employee salary slips or full monthly payroll reports.",
            ar: "ادارة بيانات الموظفين , إدارة السلف و الاقتطاعات و الاجازات,إدارة جدول الحضور اليومي للموظفين,إمكانية سحب التحضيرات من جهاز البصمة (ZKTeco) و دمجها بجدول التحضيرات اليومي,تسجيل الحسميات الخاصة بالحضور المتأخر بشكل أوتوماتيكي بالاعتماد على جدول تحضيرات الموظف إدارةالرواتب : انشاء الرواتب و حذفها,كشف راتب موظف أو كشف برواتب شهر كامل"
        },
        image: "images/projects/project8/main.png",
        images: [
            "images/projects/project8/main.png",
            "images/projects/project8/gallery1.png",
            "images/projects/project8/gallery2.png",
            "images/projects/project8/gallery3.png"
        ],
        video: "",
        link: "#",
        github: "",
        liveDemo: "",
        technologies: ["Winforms", "C#", "SQL Server"],
        category: "desktop"
    }
];

// Make data available globally
window.worksData = worksData;