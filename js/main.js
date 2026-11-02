const articlesData = [
  {
    id: 1,
    articlePath: "responsible-borrowing.html",
    title: "ກູ້ຢືມຢ່າງມີຄວາມຮັບຜິດຊອບ: ວິທີປະເມີນຄວາມສາມາດໃນການຊຳລະໜີ້",
    categoryKey: "responsible-borrowing",
    categoryName: "ຂໍ້ຄິດການກູ້ຢືມ",
    readTime: "4 ນາທີ",
    summary: "ຮຽນຮູ້ວິທີວິເຄາະກະແສເງິນສົດກ່ອນຕັດສິນໃຈກູ້ຢືມ ເພື່ອປ້ອງກັນບັນຫາໜີ້ເກີນຕົວ ແລະ ເລືອກເງື່ອນໄຂທີ່ເໝາະສົມກັບລາຍຮັບໃນແຕ່ລະງວດ",
    author: "ໂດຍ ທີມງານສິນເຊຶ່ອ ສາຍທາລາ",
    date: "14 ຕ.ລ. 2024",
    icon: "account_balance_wallet"
  },
  {
    id: 2,
    articlePath: "bunsy101.html",
    title: "ບັນຊີ 101: ເຄັດລັບການແຍກເງິນສ່ວນຕົວ ອອກຈາກບັນຊີທຸລະກິດຮ້ານຄ້າ",
    categoryKey: "bookkeeping",
    categoryName: "ການເຮັດບັນຊີ",
    readTime: "5 ນາທີ",
    summary: "ແນວທາງການບັນທຶກລາຍຮັບ-ລາຍຈ່າຍປະຈຳວັນ ເພື່ອຮັກສາສະພາບຄ່ອງ ປົກປ້ອງເງິນທຶນໝຸນວຽນ ແລະ ສ້າງຄວາມໂປ່ງໃສໃນບັນຊີ",
    author: "ໂດຍ ທີມງານສິນເຊຶ່ອ ສາຍທາລາ",
    date: "11 ຕ.ລ. 2024",
    icon: "receipt_long"
  },
  {
    id: 3,
    articlePath: "reserves-fund.html",
    title: "ເປັນຫຍັງການມີກອງທຶນສຳຮອງຈຶ່ງສຳຄັນກັບເຈົ້າຂອງທຸລະກິດ?",
    categoryKey: "reserves-fund",
    categoryName: "ເງິນທຶນໝຸນວຽນ",
    readTime: "6 ນາທີ",
    summary: "ຄວາມບໍ່ແນ່ນອນຂອງກະແສເງິນສົດຄືສິ່ງທ້າທາຍອັນດັບໜຶ່ງຂອງທຸລະກິດລາຍຍ່ອມ ແລະ SME ເຈົ້າຂອງກິດຈະການຫຼາຍ",
    author: "ໂດຍ ທີມງານສິນເຊຶ່ອ ສາຍທາລາ",
    date: "08 ຕ.ລ. 2024",
    icon: "trending_up"
  },
  {
    id: 4,
    title: "ເຕັກນິກການຕັ້ງລາຄາຂາຍ ແລະ ການຄຳນວນຈຸດຄຸ້ມທຶນ ສຳລັບຮ້ານຄ້າຍ່ອຍ",
    categoryKey: "bookkeeping",
    categoryName: "ການເຮັດບັນຊີ",
    readTime: "4 ນາທີ",
    summary: "ວິທີຄິດໄລ່ຕົ້ນທຶນແຝງ ກຳໄລຂັ້ນຕົ້ນ ແລະ ກຳນົດລາຄາຂາຍ ເພື່ອປ້ອງກັນການຂາດທຶນ ໂດຍບໍ່ສູນເສຍຄວາມສາມາດໃນການແຂ່ງຂັນໃນຕະຫຼາດທ້ອງຖິ່ນ",
    author: "ໂດຍ ທີມງານສິນເຊຶ່ອ ສາຍທາລາ",
    date: "02 ຕ.ລ. 2024",
    icon: "calculate"
  },
  {
    id: 5,
    title: "ການຈັດເຮັດງົບປະມານຄອບຄົວແບບ 50/30/20 ສະບັບປັບໃຊ້ກັບຜູ້ປະກອບອາຊີບອິດສະຫຼະ",
    categoryKey: "budgeting",
    categoryName: "ການວາງແຜນງົບປະມານ",
    readTime: "5 ນາທີ",
    summary: "ປັບສູດການອອມ ແລະ ການໃຊ້ຈ່າຍສຳລັບຜູ້ມີລາຍຮັບບໍ່ແນ່ນອນໃນແຕ່ລະເດືອນ ໃຫ້ມີເງິນສຳຮອງສຸກເສີນ ແລະ ພ້ອມຮັບມືກັບຄວາມບໍ່ແນ່ນອນ",
    author: "ໂດຍ ທີມງານສິນເຊຶ່ອ ສາຍທາລາ",
    date: "28 ກ.ຍ. 2024",
    icon: "pie_chart"
  },
  {
    id: 6,
    articlePath: "cash-flow.html",
    title: "ສຳຫຼວດ 4 ສັນຍານເຕືອນໄພທາງການເງິນ ທີ່ບົ່ງບອກວ່າທຸລະກິດຂອງທ່ານຕ້ອງການການປັບໂຄງສ້າງ",
    categoryKey: "cash-flow",
    categoryName: "ເງິນທຶນໝຸນວຽນ",
    readTime: "5 ນາທີ",
    summary: "ສັນຍານເຕືອນເລື່ອງສະພາບຄ່ອງ, ລູກໜີ້ການຄ້າຄ້າງຊຳລະ ແລະ ອັດຕາໜີ້ສິນຕໍ່ທຶນ ເພື່ອວາງແຜນຮັບມື ແລະ ປັບໂຄງສ້າງທາງການເງິນກ່ອນສາຍເກີນໄປ",
    author: "ໂດຍ ທີມງານສິນເຊຶ່ອ ສາຍທາລາ",
    date: "22 ກ.ຍ. 2024",
    icon: "warning"
  },
  {
    id: 7,
    articlePath: "legal-requirements.html",
    title: "ຂໍ້ກົດໝາຍທີ່ຕ້ອງໄດ້ຮູ້ກ່ອນການກູ້ຢືມ",
    categoryKey: "legal_of_loan",
    categoryName: "ກົດໝາຍການກູ້ຢືມ",
    readTime: "5 ນາທີ",
    summary: "ການກູ້ຢືມເປັນການເຮັດສັນຍາ ທ່ານເປັນຜູ້ເຊັ່ນສັນຍາ ແລະ ຕ້ອງໄດ້ຮັບຮູ້ ກ່ອນການສັນຍາກູ້ຢືມ ແລະ ການຊໍາລະໜີ້ ",
    author: "ໂດຍ ທີມງານສິນເຊຶ່ອ ສາຍທາລາ",
    date: "15 ກ.ຍ. 2024",
    icon: "gavel"
  }
];

let currentCategory = 'all';
let searchQuery = '';

function renderArticles() {
  const grid = document.getElementById('articles-grid');
  const counter = document.getElementById('articles-count');
  const noResults = document.getElementById('no-results');

  if (!grid) return;

  const filtered = articlesData.filter(article => {
    const matchesCategory = currentCategory === 'all' || article.categoryKey === currentCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  counter.textContent = `ສະແດງ ${filtered.length} ບົດຄວາມ`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    noResults.classList.add('flex');
    return;
  }

  noResults.classList.add('hidden');
  noResults.classList.remove('flex');

  grid.innerHTML = filtered.map(item => `
    <article class="bg-surface-container-lowest rounded-xl p-spacing-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-spacing-xs mb-spacing-md">
          <span class="inline-flex items-center gap-spacing-2xs px-spacing-sm py-spacing-2xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
            <span class="material-symbols-outlined text-[14px] text-secondary">${item.icon}</span>
            ${item.categoryName}
          </span>
          <span class="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-spacing-2xs">
            <span class="material-symbols-outlined text-[14px]">schedule</span>
            ${item.readTime}
          </span>
        </div>

        <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors mb-spacing-xs leading-snug line-clamp-2">
          ${item.articlePath ? `<a href="${item.articlePath}">${item.title}</a>` : item.title}
        </h3>

        <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-spacing-lg">
          ${item.summary}
        </p>
      </div>

      <div class="pt-spacing-md bg-surface-container-lowest flex items-center justify-between">
        <div class="flex flex-col">
          <span class="font-label-sm text-label-sm text-on-surface">${item.author}</span>
          <span class="font-body-sm text-body-sm text-on-surface-variant">${item.date}</span>
        </div>

        ${item.articlePath
          ? `<a href="${item.articlePath}" class="inline-flex items-center gap-spacing-2xs text-secondary hover:text-on-secondary-container font-label-md text-label-md group-hover:translate-x-1 transition-transform">
               <span>ອ່ານຕໍ່</span>
               <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
             </a>`
          : `<span class="font-label-sm text-label-sm text-on-surface-variant">ກຳລັງຈັດທຳ</span>`}
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  // Synchronize Active Header Nav State
  const links = document.querySelectorAll('header nav a');
  links.forEach(link => {
    if (link.getAttribute('data-path') === 'financial-literacy') {
      link.classList.remove('text-on-surface-variant', 'border-transparent');
      link.classList.add('text-secondary', 'border-secondary', 'font-headline-sm');
    }
  });

  // Render initial articles
  renderArticles();

  // Search Input Event
  const searchInput = document.getElementById('article-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderArticles();
    });
  }

  // Category Filter Buttons Event
  const filterButtons = document.querySelectorAll('#category-filters .filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
        b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
      });
      btn.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
      btn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');

      currentCategory = btn.getAttribute('data-cat');
      renderArticles();
    });
  });

  // Reset Filter Button Event
  const resetBtn = document.getElementById('reset-filter-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      
      filterButtons.forEach(b => {
        if (b.getAttribute('data-cat') === 'all') {
          b.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
          b.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
        } else {
          b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
          b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
        }
      });

      renderArticles();
    });
  }

  const copyButton = document.getElementById('btn-copy-link');
  const copyText = document.getElementById('copy-text');
  if (copyButton && copyText) {
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyText.textContent = 'ຄັດລອກແລ້ວ';
      } catch (error) {
        copyText.textContent = 'ຄັດລອກບໍ່ສຳເລັດ';
        console.error('Unable to copy article link:', error);
      }
    });
  }

  const shareButtons = document.getElementById('share-buttons');
  if (shareButtons) {
    const articleUrl = encodeURIComponent(window.location.href);
    const articleHeading = document.querySelector('h1');
    const articleTitle = encodeURIComponent(articleHeading ? articleHeading.textContent.trim() : document.title);
    const facebookButton = shareButtons.querySelector('[aria-label="Share on Facebook"]');
    const whatsappButton = shareButtons.querySelector('[aria-label="Share on WhatsApp"]');

    if (facebookButton) {
      facebookButton.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`, '_blank', 'noopener,noreferrer');
      });
    }

    if (whatsappButton) {
      whatsappButton.addEventListener('click', () => {
        window.open(`https://wa.me/?text=${articleTitle}%20${articleUrl}`, '_blank', 'noopener,noreferrer');
      });
    }
  }

  const revenueInput = document.getElementById('monthly-revenue');
  const costsInput = document.getElementById('monthly-costs');
  const reinvestInput = document.getElementById('reinvest-ratio');
  const reinvestValue = document.getElementById('reinvest-val');
  const grossProfit = document.getElementById('gross-profit');
  const reserveFund = document.getElementById('reserve-fund');
  const ownerSalary = document.getElementById('owner-salary');
  const salaryStatus = document.getElementById('salary-status');
  const salaryReset = document.querySelector('[data-action="reset-calculator"]');

  if (revenueInput && costsInput && reinvestInput && reinvestValue && grossProfit && reserveFund && ownerSalary) {
    const formatKip = amount => `${Math.round(amount).toLocaleString('en-US')} ₭`;
    const updateSalaryEstimate = () => {
      const revenue = Number(revenueInput.value);
      const costs = Number(costsInput.value);
      const ratio = Number(reinvestInput.value) / 100;
      const profit = revenue - costs;
      const reserve = Math.max(0, profit * ratio);
      const salary = Math.max(0, profit - reserve);

      reinvestValue.textContent = `${reinvestInput.value}%`;
      grossProfit.textContent = formatKip(profit);
      reserveFund.textContent = formatKip(reserve);
      ownerSalary.textContent = formatKip(salary);

      if (salaryStatus) {
        salaryStatus.textContent = profit > 0
          ? 'ສະຖານະ: ປອດໄພຕໍ່ສະພາບຄ່ອງ'
          : 'ສະຖານະ: ລາຍຈ່າຍສູງກວ່າລາຍຮັບ';
      }
    };

    [revenueInput, costsInput, reinvestInput].forEach(input => {
      input.addEventListener('input', updateSalaryEstimate);
    });

    if (salaryReset) {
      salaryReset.addEventListener('click', () => {
        revenueInput.value = '120000000';
        costsInput.value = '70000000';
        reinvestInput.value = '30';
        updateSalaryEstimate();
      });
    }

    updateSalaryEstimate();
  }

  const checklistItems = document.querySelectorAll('#checklist-group .checklist-item');
  const checklistScore = document.getElementById('checklist-score');
  const checklistFeedback = document.getElementById('checklist-feedback');
  if (checklistItems.length && checklistScore && checklistFeedback) {
    const updateChecklist = () => {
      const completed = [...checklistItems].filter(item => item.checked).length;
      checklistScore.textContent = `ຄະແນນຄວາມພ້ອມ: ${completed}/${checklistItems.length}`;
      checklistFeedback.textContent = completed === checklistItems.length
        ? 'ດີຫຼາຍ! ທ່ານມີພື້ນຖານການເງິນທຸລະກິດທີ່ແຂງແຮງ'
        : `ເລືອກຂໍ້ທີ່ທ່ານດຳເນີນການແລ້ວ (${completed}/${checklistItems.length}) ເພື່ອປະເມີນລະດັບການແຍກກະເປົາເງິນຂອງຮ້ານ`;
    };

    checklistItems.forEach(item => item.addEventListener('change', updateChecklist));
    updateChecklist();
  }
});