/* ============================================================
   XENO7YT DIGITAL HUB
   Central configuration
   ============================================================ */

const SITE_CONFIG = {
    name: "Xeno7YT",

    role: "Creator • Gamer • Student • Coder",

    email: "Xeno7yt@gmail.com",

    profileImage: "assets/profile.png",

    donation: {
        upi: "mishranishikanta7@ybl",
        payeeName: "Xeno7"
    },

    social: {
        youtube: "https://youtube.com/@xeno7_yt",
        instagram: "https://www.instagram.com/xeno7_yt",
        x: "https://x.com/xeno7yt",
        facebook: "https://www.facebook.com/share/1S8VqQ5AHZ/",
        github: "https://github.com/xeno7yt"
    }
};


/* ============================================================
   EXTENSIBLE SOCIAL CONFIGURATION
   Add another object here to support another platform.
   ============================================================ */

const SOCIAL_LINKS = [
    {
        key: "youtube",
        name: "YouTube",
        username: "@xeno7_yt",
        description: "Videos & Gaming",
        icon: "youtube"
    },

    {
        key: "instagram",
        name: "Instagram",
        username: "@xeno7_yt",
        description: "Photos & Updates",
        icon: "instagram"
    },

    {
        key: "x",
        name: "X",
        username: "@xeno7yt",
        description: "Updates & Thoughts",
        icon: "x"
    },

    {
        key: "facebook",
        name: "Facebook",
        username: "",
        description: "Facebook",
        icon: "facebook"
    },

    {
        key: "github",
        name: "GitHub",
        username: "@xeno7yt",
        description: "Code & Projects",
        icon: "github"
    }
];


/* ============================================================
   INLINE SVG ICON SYSTEM
   ============================================================ */

const ICONS = {
    youtube: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C1.9 8.9 1.9 12 1.9 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8Z"/>
            <path d="m10 15.5 5-3.5-5-3.5v7Z"/>
        </svg>`,

    instagram: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.3" cy="6.7" r=".7" fill="currentColor" stroke="none"/>
        </svg>`,

    x: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 4 19 20"/>
            <path d="M19 4 5 20"/>
            <path d="M4 4h4l12 16h-4L4 4Z"/>
        </svg>`,

    facebook: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z"/>
        </svg>`,

    github: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M15 22v-3.1c.1-1.4-.5-2.4-1.4-2.9 4.5-.5 7.3-2.2 7.3-7.2 0-1.4-.5-2.7-1.4-3.7.1-.3.6-1.8-.1-3.7 0 0-1.1-.4-3.7 1.4a12.5 12.5 0 0 0-6.7 0C6.4 1 5.3 1.4 5.3 1.4c-.7 1.9-.2 3.4-.1 3.7-.9 1-1.4 2.3-1.4 3.7 0 5 2.8 6.7 7.3 7.2-.9.5-1.5 1.3-1.5 2.6V22"/>
            <path d="M7.5 18.1c-.5.3-1.7.1-2.5-1-.7-1-1.5-1.4-1.8-1.5-.3-.2-.1-.5.2-.5.4 0 1.3.1 2 1 .7.9 1.5 1.1 1.9.8"/>
        </svg>`,

    email: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="3"/>
            <path d="m4 7 8 6 8-6"/>
        </svg>`,

    copy: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" rx="2"/>
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
        </svg>`,

    share: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="18" cy="5" r="2.5"/>
            <circle cx="6" cy="12" r="2.5"/>
            <circle cx="18" cy="19" r="2.5"/>
            <path d="m8.2 10.8 7.5-4.4"/>
            <path d="m8.2 13.2 7.5 4.4"/>
        </svg>`,

    menu: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
             stroke-linecap="round" aria-hidden="true">
            <path d="M4 7h16"/>
            <path d="M4 12h16"/>
            <path d="M4 17h16"/>
        </svg>`,

    close: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
             stroke-linecap="round" aria-hidden="true">
            <path d="m6 6 12 12"/>
            <path d="m18 6-12 12"/>
        </svg>`,

    sun: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.42 1.42"/>
            <path d="m17.65 17.65 1.42 1.42"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.35 17.65-1.42 1.42"/>
            <path d="m19.07 4.93-1.42 1.42"/>
        </svg>`,

    moon: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.5 14.8A8.5 8.5 0 0 1 9.2 3.5 8.5 8.5 0 1 0 20.5 14.8Z"/>
        </svg>`,

    arrow: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h13"/>
            <path d="m13 6 6 6-6 6"/>
        </svg>`,

    arrowUp: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 19V5"/>
            <path d="m6 11 6-6 6 6"/>
        </svg>`,

    external: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 5h5v5"/>
            <path d="m19 5-8 8"/>
            <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>
        </svg>`,

    heart: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.8 8.7c0 5.5-8.8 10.1-8.8 10.1S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"/>
        </svg>`,

    code: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m8 8-4 4 4 4"/>
            <path d="m16 8 4 4-4 4"/>
            <path d="m14 5-4 14"/>
        </svg>`,

    gaming: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M7.5 7h9A5.5 5.5 0 0 1 22 12.5v1.8a4.7 4.7 0 0 1-8.5 2.8l-.7-1.1h-1.6l-.7 1.1A4.7 4.7 0 0 1 2 14.3v-1.8A5.5 5.5 0 0 1 7.5 7Z"/>
            <path d="M7 11v4"/>
            <path d="M5 13h4"/>
            <circle cx="17" cy="12" r=".8" fill="currentColor" stroke="none"/>
            <circle cx="19" cy="14" r=".8" fill="currentColor" stroke="none"/>
        </svg>`,

    student: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m3 9 9-5 9 5-9 5-9-5Z"/>
            <path d="M7 11.2V16c2.8 2.5 7.2 2.5 10 0v-4.8"/>
            <path d="M21 10v5"/>
        </svg>`,

    support: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9"/>
            <path d="M8.5 12.5 11 15l4.8-5.2"/>
        </svg>`
};


/* ============================================================
   HELPERS
   ============================================================ */

const $ = (selector, parent = document) => parent.querySelector(selector);

const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function icon(name) {
    return ICONS[name] || "";
}

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}

function getSocialConfig(key) {
    return SITE_CONFIG.social && typeof SITE_CONFIG.social[key] === "string"
        ? SITE_CONFIG.social[key].trim()
        : "";
}

function getConfiguredSocialLinks() {
    return SOCIAL_LINKS.map(platform => ({
        ...platform,
        url: getSocialConfig(platform.key)
    }));
}


/* ============================================================
   ICON INITIALIZATION
   ============================================================ */

function initIcons() {
    $$("[data-icon]").forEach(element => {
        const requested = element.dataset.icon;

        if (requested === "theme") {
            return;
        }

        const iconName = requested === "arrow-up" ? "arrowUp" : requested;

        if (ICONS[iconName]) {
            element.innerHTML = icon(iconName);
        }
    });
}


/* ============================================================
   THEME
   ============================================================ */

function getPreferredTheme() {
    const saved = localStorage.getItem("xeno7yt-theme");

    if (saved === "dark" || saved === "light") {
        return saved;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
}

function updateThemeIcon(theme) {
    $$(".theme-toggle").forEach(button => {
        const isDark = theme === "dark";

        button.innerHTML = isDark
            ? icon("sun")
            : icon("moon");

        button.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );

        button.setAttribute(
            "title",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );
    });
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("xeno7yt-theme", theme);
    updateThemeIcon(theme);
}

function initTheme() {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    $$(".theme-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const current = document.documentElement.dataset.theme || "dark";
            applyTheme(current === "dark" ? "light" : "dark");
        });
    });
}


/* ============================================================
   NAVIGATION
   ============================================================ */

function initNavigation() {
    const menuToggle = $(".menu-toggle");
    const menu = $("#mobile-menu");
    const menuClosers = $$("[data-menu-close]");

    if (!menuToggle || !menu) {
        return;
    }

    const setMenuState = open => {
        document.body.classList.toggle("menu-open", open);
        menu.setAttribute("aria-hidden", String(!open));
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute(
            "aria-label",
            open ? "Close navigation menu" : "Open navigation menu"
        );
    };

    menuToggle.addEventListener("click", () => {
        setMenuState(!document.body.classList.contains("menu-open"));
    });

    menuClosers.forEach(element => {
        element.addEventListener("click", () => setMenuState(false));
    });

    $$("#mobile-menu a").forEach(link => {
        link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
            setMenuState(false);
            menuToggle.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 800 && document.body.classList.contains("menu-open")) {
            setMenuState(false);
        }
    });

    const currentPage = document.body.dataset.page;

    $$("[data-nav]").forEach(link => {
        if (link.dataset.nav === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}


/* ============================================================
   SOCIAL LINKS
   ============================================================ */

function renderSocialBar(container) {
    const links = getConfiguredSocialLinks();

    container.innerHTML = links.map(platform => {
        const configured = Boolean(platform.url);

        if (!configured) {
            return `
                <button
                    class="social-link"
                    type="button"
                    data-platform-missing="${escapeHTML(platform.name)}"
                    aria-label="${escapeHTML(platform.name)} — Coming Soon"
                    title="${escapeHTML(platform.name)} — Coming Soon">
                    ${icon(platform.icon)}
                </button>
            `;
        }

        return `
            <a
                class="social-link"
                href="${escapeHTML(platform.url)}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ${escapeHTML(platform.name)}"
                title="${escapeHTML(platform.name)}">
                ${icon(platform.icon)}
            </a>
        `;
    }).join("");
}

function initSocialLinks() {
    $$("[data-social-bar]").forEach(renderSocialBar);

    $$("[data-social-cards]").forEach(container => {
        const links = getConfiguredSocialLinks();

        container.innerHTML = links.map(platform => {
            const configured = Boolean(platform.url);

            return `
                <article class="platform-card ${configured ? "" : "coming-soon"} reveal">
                    <div class="platform-icon">
                        ${icon(platform.icon)}
                    </div>

                    <div class="platform-info">
                        <h3>${escapeHTML(platform.name)}</h3>

                        ${
                            platform.username
                                ? `<p class="platform-username">${escapeHTML(platform.username)}</p>`
                                : ""
                        }

                        <p class="platform-description">
                            ${escapeHTML(platform.description)}
                        </p>

                        <span class="platform-status">
                            <i></i>
                            ${configured ? "Configured" : "Coming Soon"}
                        </span>
                    </div>

                    ${
                        configured
                            ? `
                                <a
                                    class="button button-small button-secondary"
                                    href="${escapeHTML(platform.url)}"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Visit
                                    <span data-icon="external"></span>
                                </a>
                            `
                            : `
                                <button
                                    class="button button-small button-secondary"
                                    type="button"
                                    data-platform-missing="${escapeHTML(platform.name)}">
                                    Coming Soon
                                </button>
                            `
                    }
                </article>
            `;
        }).join("");
    });

    $$("[data-contact-socials]").forEach(container => {
        const links = getConfiguredSocialLinks();

        container.innerHTML = links.map(platform => {
            const configured = Boolean(platform.url);

            if (!configured) {
                return `
                    <button
                        class="contact-social-item"
                        type="button"
                        data-platform-missing="${escapeHTML(platform.name)}"
                        aria-label="${escapeHTML(platform.name)} — Coming Soon">
                        <span class="platform-icon">${icon(platform.icon)}</span>
                        <span>
                            <strong>${escapeHTML(platform.name)}</strong>
                            <small>Coming Soon</small>
                        </span>
                    </button>
                `;
            }

            return `
                <a
                    class="contact-social-item"
                    href="${escapeHTML(platform.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open ${escapeHTML(platform.name)}">
                    <span class="platform-icon">${icon(platform.icon)}</span>
                    <span>
                        <strong>${escapeHTML(platform.name)}</strong>
                        <small>${escapeHTML(platform.username || platform.description)}</small>
                    </span>
                    ${icon("external")}
                </a>
            `;
        }).join("");
    });
}


/* ============================================================
   QUICK ACCESS
   ============================================================ */

function initQuickAccess() {
    const container = $("[data-quick-links]");

    if (!container) {
        return;
    }

    const links = getConfiguredSocialLinks();

    const platformItems = links.map(platform => {
        const configured = Boolean(platform.url);

        if (!configured) {
            return `
                <button
                    class="quick-link"
                    type="button"
                    data-platform-missing="${escapeHTML(platform.name)}"
                    aria-label="${escapeHTML(platform.name)} — Coming Soon">
                    ${icon(platform.icon)}
                    <span>${escapeHTML(platform.name)}</span>
                </button>
            `;
        }

        return `
            <a
                class="quick-link"
                href="${escapeHTML(platform.url)}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ${escapeHTML(platform.name)}">
                ${icon(platform.icon)}
                <span>${escapeHTML(platform.name)}</span>
            </a>
        `;
    });

    platformItems.push(`
        <a
            class="quick-link"
            href="mailto:${escapeHTML(SITE_CONFIG.email)}"
            aria-label="Send email to ${escapeHTML(SITE_CONFIG.email)}">
            ${icon("email")}
            <span>Email</span>
        </a>
    `);

    platformItems.push(`
        <a
            class="quick-link"
            href="support.html"
            aria-label="Open support page">
            ${icon("heart")}
            <span>Support</span>
        </a>
    `);

    container.innerHTML = platformItems.join("");
}


/* ============================================================
   COPY SYSTEM
   ============================================================ */

async function copyToClipboard(text, successMessage) {
    if (!text) {
        showToast("Nothing to copy.", "warning");
        return false;
    }

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();

            const copied = document.execCommand("copy");
            textarea.remove();

            if (!copied) {
                throw new Error("Clipboard copy failed");
            }
        }

        showToast(successMessage, "success");
        return true;
    } catch {
        showToast("Copy failed. Please copy it manually.", "error");
        return false;
    }
}

function initCopyButtons() {
    $$(".copy-email").forEach(button => {
        button.addEventListener("click", () => {
            copyToClipboard(SITE_CONFIG.email, "Email copied!");
        });
    });

    $$(".copy-upi").forEach(button => {
        button.addEventListener("click", () => {
            copyToClipboard(SITE_CONFIG.donation.upi, "UPI ID copied!");
        });
    });
}


/* ============================================================
   SHARE
   ============================================================ */

async function initShare() {
    const shareButtons = $$(".share-trigger");

    if (!shareButtons.length) {
        return;
    }

    const shareData = {
        title: "Xeno7YT — Digital Hub",
        text: "Connect with Xeno7YT across the web.",
        url: window.location.href
    };

    shareButtons.forEach(button => {
        button.addEventListener("click", async () => {
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                    showToast("Share successful!", "success");
                } catch (error) {
                    if (error && error.name === "AbortError") {
                        return;
                    }

                    await copyToClipboard(window.location.href, "Link Copied!");
                }

                return;
            }

            await copyToClipboard(window.location.href, "Link Copied!");
        });
    });
}


/* ============================================================
   TOAST SYSTEM
   ============================================================ */

function showToast(message, type = "info") {
    const region = $(".toast-region");

    if (!region) {
        return;
    }

    const icons = {
        success: "support",
        info: "share",
        warning: "support",
        error: "close"
    };

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", "status");

    toast.innerHTML = `
        <span class="toast-icon">${icon(icons[type] || "share")}</span>
        <span class="toast-message">${escapeHTML(message)}</span>
    `;

    region.appendChild(toast);

    window.setTimeout(() => {
        toast.classList.add("is-leaving");

        window.setTimeout(() => {
            toast.remove();
        }, 260);
    }, 3000);
}

function initToastDelegation() {
    document.addEventListener("click", event => {
        const missing = event.target.closest("[data-platform-missing]");

        if (!missing) {
            return;
        }

        const platform = missing.dataset.platformMissing || "This platform";
        showToast(`${platform} link is not configured yet.`, "info");
    });
}


/* ============================================================
   PROFILE IMAGE FALLBACK
   ============================================================ */

function initProfileImage() {
    $$(".profile-image").forEach(image => {
        const wrapper = image.closest(".profile-ring");

        if (!wrapper) {
            return;
        }

        const markMissing = () => {
            wrapper.classList.add("image-missing");
        };

        image.addEventListener("error", markMissing);

        if (image.complete && image.naturalWidth === 0) {
            markMissing();
        }
    });
}


/* ============================================================
   UPI
   ============================================================ */

function initUPI() {
    $$(".pay-upi").forEach(link => {
        link.href =
            `upi://pay?pa=${encodeURIComponent(SITE_CONFIG.donation.upi)}` +
            `&pn=${encodeURIComponent(SITE_CONFIG.donation.payeeName)}`;

        link.addEventListener("click", () => {
            window.setTimeout(() => {
                showToast(
                    "If your UPI app did not open, copy the UPI ID and enter it manually.",
                    "info"
                );
            }, 900);
        });
    });

    $$("[data-upi-display]").forEach(element => {
        element.textContent = SITE_CONFIG.donation.upi;
    });
}


/* ============================================================
   DYNAMIC PERSONAL DATA
   ============================================================ */

function initIdentityData() {
    $$("[data-email-display]").forEach(element => {
        element.textContent = SITE_CONFIG.email;
    });

    $$("[href^='mailto:']").forEach(link => {
        link.href = `mailto:${SITE_CONFIG.email}`;
    });
}


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

function initScrollReveal() {
    const elements = $$(".reveal");

    if (!elements.length) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -35px"
        }
    );

    elements.forEach(element => observer.observe(element));
}


/* ============================================================
   BACK TO TOP
   ============================================================ */

function initBackToTop() {
    const button = $(".back-to-top");

    if (!button) {
        return;
    }

    const updateVisibility = () => {
        button.classList.toggle("visible", window.scrollY > 500);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth"
        });
    });
}


/* ============================================================
   PAGE ANIMATIONS
   ============================================================ */

function initPageAnimations() {
    document.body.classList.add("page-ready");
}


/* ============================================================
   SYSTEM STARTUP
   ============================================================ */

function init() {
    initIcons();
    initTheme();
    initNavigation();
    initSocialLinks();
    initQuickAccess();
    initCopyButtons();
    initShare();
    initToastDelegation();
    initProfileImage();
    initUPI();
    initIdentityData();
    initScrollReveal();
    initBackToTop();
    initPageAnimations();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
    init();
}