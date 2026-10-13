// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.className = 'fa-solid fa-bars';
    } else {
        icon.className = 'fa-solid fa-xmark';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// Navbar scroll background change
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Pricing Data & Tab Switcher (Lengkap mencakup seluruh paket dan harga layanan)
const pricingData = {
    smm: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald transition-all duration-300 flex flex-col justify-between shadow-md">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Social Media Management</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Basic</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp150.000</span>
                        <span class="text-xs text-navy/60">/bulan</span>
                    </div>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 4 Feed</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 4 Story</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Caption</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Social%20Media%20Management%20Basic%20-%20Rp150.000/bulan." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald/10 border border-emerald/30 text-emerald font-semibold hover:bg-emerald hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>

            <div class="p-8 rounded-3xl bg-slate-50 border-2 border-emerald relative flex flex-col justify-between shadow-xl shadow-emerald/5">
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Recommended
                </div>
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Social Media Management</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Standard</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp250.000</span>
                        <span class="text-xs text-navy/60">/bulan</span>
                    </div>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 6 Feed</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 4 Story</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Kalender Konten</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Social%20Media%20Management%20Standard%20-%20Rp250.000/bulan." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald text-white font-semibold hover:bg-emerald-light transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald/20">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>

            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald transition-all duration-300 flex flex-col justify-between shadow-md">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Social Media Management</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Premium</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp350.000</span>
                        <span class="text-xs text-navy/60">/bulan</span>
                    </div>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 8 Feed</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 6 Story</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Evaluasi Sederhana</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Social%20Media%20Management%20Premium%20-%20Rp350.000/bulan." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald/10 border border-emerald/30 text-emerald font-semibold hover:bg-emerald hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>
        </div>
    `,
    content: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald transition-all duration-300 flex flex-col justify-between shadow-md">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Content Creation</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Basic Content</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp75.000</span>
                        <span class="text-xs text-navy/60">/paket</span>
                    </div>
                    <p class="text-xs text-navy/60">Fokus pada pembuatan desain konten visual, bukan pengelolaan akun.</p>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 4 Feed</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 4 Story</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Basic%20Content%20-%20Rp75.000/paket." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald/10 border border-emerald/30 text-emerald font-semibold hover:bg-emerald hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>

            <div class="p-8 rounded-3xl bg-slate-50 border-2 border-emerald relative flex flex-col justify-between shadow-xl shadow-emerald/5">
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Recommended
                </div>
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Content Creation</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Standard Content</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp100.000</span>
                        <span class="text-xs text-navy/60">/paket</span>
                    </div>
                    <p class="text-xs text-navy/60">Fokus pada pembuatan desain konten visual, bukan pengelolaan akun.</p>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 6 Feed</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 4 Story</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Standard%20Content%20-%20Rp100.000/paket." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald text-white font-semibold hover:bg-emerald-light transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald/20">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>

            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald transition-all duration-300 flex flex-col justify-between shadow-md">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Content Creation</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Premium Content</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp150.000</span>
                        <span class="text-xs text-navy/60">/paket</span>
                    </div>
                    <p class="text-xs text-navy/60">Fokus pada pembuatan desain konten visual, bukan pengelolaan akun.</p>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 8 Feed</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 6 Story</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Premium%20Content%20-%20Rp150.000/paket." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald/10 border border-emerald/30 text-emerald font-semibold hover:bg-emerald hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>
        </div>
    `,
    campaign: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald transition-all duration-300 flex flex-col justify-between shadow-md">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Digital Campaign</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Basic Campaign</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp150.000</span>
                        <span class="text-xs text-navy/60">/kampanye</span>
                    </div>
                    <p class="text-xs text-navy/60">Biaya iklan berbayar tidak termasuk dalam harga paket.</p>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Konsep Kampanye</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Target Audiens</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 2 Konten Kampanye</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Basic%20Campaign%20-%20Rp150.000/kampanye." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald/10 border border-emerald/30 text-emerald font-semibold hover:bg-emerald hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>

            <div class="p-8 rounded-3xl bg-slate-50 border-2 border-emerald relative flex flex-col justify-between shadow-xl shadow-emerald/5">
                <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Recommended
                </div>
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Digital Campaign</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Standard Campaign</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp250.000</span>
                        <span class="text-xs text-navy/60">/kampanye</span>
                    </div>
                    <p class="text-xs text-navy/60">Biaya iklan berbayar tidak termasuk dalam harga paket.</p>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Strategi Sederhana</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 4 Konten Kampanye</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Copywriting Profesional</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Standard%20Campaign%20-%20Rp250.000/kampanye." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald text-white font-semibold hover:bg-emerald-light transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald/20">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>

            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald transition-all duration-300 flex flex-col justify-between shadow-md">
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-semibold text-emerald uppercase tracking-wider">Digital Campaign</span>
                        <h3 class="text-2xl font-bold text-navy mt-1">Premium Campaign</h3>
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-3xl font-extrabold text-navy">Rp350.000</span>
                        <span class="text-xs text-navy/60">/kampanye</span>
                    </div>
                    <p class="text-xs text-navy/60">Biaya iklan berbayar tidak termasuk dalam harga paket.</p>
                    <ul class="space-y-3 text-sm text-navy/80">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Strategi Komprehensif</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> 6 Konten Kampanye</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-emerald"></i> Kalender & Evaluasi</li>
                    </ul>
                </div>
                <div class="pt-8">
                    <a href="https://wa.me/6281234567890?text=Halo%20Loka%20Growth,%20saya%20ingin%20memesan%20paket%20Premium%20Campaign%20-%20Rp350.000/kampanye." target="_blank" class="w-full py-3.5 rounded-xl bg-emerald/10 border border-emerald/30 text-emerald font-semibold hover:bg-emerald hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp"></i> Pilih Paket
                    </a>
                </div>
            </div>
        </div>
    `
};

function switchTab(category) {
    const container = document.getElementById('pricing-container');
    container.innerHTML = pricingData[category];

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.className = "tab-btn px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-slate-100 text-navy/80 border border-slate-200 hover:border-emerald";
    });

    const activeBtn = document.getElementById(`tab-${category}`);
    activeBtn.className = "tab-btn px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-emerald text-white shadow-lg shadow-emerald/20";
}