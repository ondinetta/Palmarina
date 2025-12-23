1. Executive Summary

PALMARINA is a single-screen, editorial “coming soon” page designed to:
	•	Create an instant emotional impression (high-fashion, tropical, minimal).
	•	Clearly communicate:
	•	Project name: PALMARINA
	•	Status: Coming Soon™
	•	GPS coordinates of the location.
	•	Deliver this in one glance on both desktop (split layout) and mobile (stacked layout), with no interaction required.

Visual UX concept:
An editorial magazine spread — image on one side, typography on the other — adapted for web.

⸻

2. Personas (Focused)

Persona 1 — Curious Visitor
	•	Who: Friends, family, neighbors, partners, future guests (anyone with the link).
	•	Goal:
	•	Understand this is a future physical place.
	•	Feel the aesthetic and mood.
	•	Note or copy the location (GPS).
	•	Context:
	•	Opens shared link via WhatsApp / Instagram / email.
	•	Mostly on mobile, sometimes desktop.
	•	UX Needs:
	•	Page loads quickly.
	•	Everything visible at once.
	•	Beautiful, confident layout that looks “intentional”, not unfinished.

Persona 2 — Owner
	•	Who: PALMARINA creator.
	•	Goal:
	•	Have a beautiful placeholder that represents the future house.
	•	Confirm at least 10 visits per month via analytics.
	•	Context:
	•	Occasionally checks analytics tool.
	•	UX Needs:
	•	Page is minimal and stable (no updates required).
	•	Simple analytics integration (no visible admin on the page).

⸻

3. Core User Journeys

Journey 1 — Visitor Lands on PALMARINA

Goal: Get the vibe + see where it is, in under 5 seconds.
	1.	Open the link
	•	Page displays a sand-colored background, then hero image and text fade in.
	•	No loader/spinner.
	2.	Desktop view (split layout)
	•	Left: fullscreen land photo, softly blurred and warm-toned, with optional blurred palm silhouette.
	•	Right: sand-toned panel with:
	•	Large, bold “PALMARINA” (editorial / fashion typography) vertically centered.
	•	“Coming Soon™” directly under it, smaller but premium.
	•	GPS coordinates in the bottom-right corner, small and precise.
	3.	Mobile view (stacked layout)
	•	Top: hero image (50–60% of viewport height), same blur and warmth.
	•	Bottom: sand-toned panel with centered:
	•	PALMARINA
	•	Coming Soon™
	•	GPS coordinates near bottom, small yet readable.
	4.	Optional: Copy GPS coordinates
	•	User long-presses or clicks coordinates.
	•	Text is easy to select and copy, without selecting the whole page.
	5.	Exit
	•	User closes tab or switches app.
	•	Leaves thinking: “This is a real place, and it looks special.”

Emotions: Curiosity → impressed by visual → intrigued by location.

⸻

Journey 2 — Owner Checks Monthly Visits

Goal: Confirm people are seeing the placeholder.
	1.	Open analytics tool (e.g., GA, Plausible).
	2.	Select PALMARINA property.
	3.	View monthly visit count (simple metric).
	4.	Decide whether to share link more.

No special public UI needed; only tracking script on the page.

⸻

4. UX Pitfalls & Best Practices
	1.	Text Hard to Read on Image
	•	Risk: Hero image colors clash with typography.
	•	Solution:
	•	Use a subtle overlay/tint on the image if needed.
	•	Always ensure strong contrast for PALMARINA + Coming Soon™.
	2.	Slow Hero Image Load
	•	Risk: User sees blank or ugly layout and bounces.
	•	Solution:
	•	Optimize image (compressed, responsive sizes).
	•	Use sand-colored background first, then fade in the image.
	3.	Coordinates Overlooked or Hard to Copy
	•	Risk: Location value lost.
	•	Solution:
	•	Keep coordinates always within first viewport.
	•	Use simple, readable font; no ultra-light weights.
	•	Wrap in element that supports easy selection (tap/long-press).
	4.	Minimalism Feels Like “Nothing Loaded”
	•	Risk: Visitors think site is broken.
	•	Solution:
	•	Confident composition: clear split on desktop, clean stacking on mobile.
	•	Strong typography, balanced spacing.
	•	“Coming Soon™” explicitly communicates that this is the whole experience.
	5.	Poor Mobile Behavior
	•	Risk: Text or coordinates fall below fold or are too small.
	•	Solution:
	•	Mobile-first typography scale and spacing.
	•	Ensure PALMARINA, Coming Soon™, and coordinates are comfortably visible on common phone sizes.

⸻

5. App Layout & Navigation Flow

A. Key Screens / States

State 1 — Loading
	•	View:
	•	Full viewport soft sand background.
	•	Behavior:
	•	Hero image and text content start loading.
	•	After assets are ready, transition to main state with a short, smooth fade-in.

State 2 — Desktop Main Screen (Split Editorial Layout)
	•	Viewport: 100% width, 100% height.
	•	Layout:
	•	Left panel (≈ 55–60% width):
	•	Full-bleed land photo.
	•	Soft blur, warm sand tone, optional blurred palm silhouette.
	•	Right panel (≈ 40–45% width):
	•	Sand or off-white background.
	•	Very subtle blurred floral/tropical forms in edges (low contrast).
	•	Vertically centered text block:
	•	Large PALMARINA (left-aligned within the column).
	•	“Coming Soon™” directly below with tight spacing.
	•	GPS coordinates bottom-right, small and precise, with padding from edges.
	•	Interaction:
	•	Only interaction: select/copy coordinates.

State 3 — Mobile Main Screen (Stacked Layout)
	•	Viewport: 100% height; scroll only if absolutely necessary on very small screens.
	•	Layout:
	•	Top: hero image (50–60% of height), full-width, blurred & warm.
	•	Bottom: sand-toned panel with:
	•	Centered PALMARINA.
	•	Centered “Coming Soon™”.
	•	Coordinates centered or right-aligned near bottom.
	•	Interaction:
	•	Same: select/copy coordinates.

State 4 — Image Fallback
	•	Trigger: Hero image fails to load.
	•	View:
	•	Replace image area with solid or very subtle gradient sand tone.
	•	Keep same text layout as respective desktop or mobile version.
	•	Result:
	•	Page still looks intentional and complete, just more minimal.

⸻

B. Navigation Flow (Simple)

Entry
→ User taps link / types URL → State 1: Loading (sand background)

If image loads
→ Smooth fade to State 2 (desktop split) or State 3 (mobile stacked) based on device width

User actions
→ Visually absorbs hero + title + Coming Soon™
→ (Optional) copies GPS coordinates

Exit
→ Closes or navigates away.
Analytics count the visit in the background for the owner.

⸻

This is the full, updated UX blueprint for PALMARINA, aligned with the editorial reference layout and the original PRD.

done