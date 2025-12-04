<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div class="overflow-y-auto text-sm">
	<div class="m-auto max-w-5xl space-y-4">
		<div class="mt-8 space-y-4 text-center">
			<p class="text-3xl font-medium">Session Redirection</p>
		</div>
		<img src="/images/SD-preview-2.jpg" alt="session redirection Hero" class="my-16 rounded-lg" />
		<div class="flex flex-col gap-16 px-10 md:flex-row md:justify-between md:px-0">
			<div class="flex w-full md:w-1/3">
				<div class="space-y-2">
					<p class="text-xs font-bold uppercase tracking-wider">Done with</p>
					<p>Cursor, Svelte, Tailwind, Figma</p>
					<div class="mt-8 flex flex-wrap gap-2">
						<Badge variant="secondary">UX/UI</Badge>
						<Badge variant="secondary">Product</Badge>
						<Badge variant="secondary">Development</Badge>
					</div>
				</div>
			</div>
			<div class="w-full space-y-8 pb-16 md:w-2/3">
				<div class="space-y-2">
					<p class="text-lg font-bold">Background</p>
					<p>
						Managing event timings was stressful for organizers, especially given the traditionally
						rigid approach to session management. Goldcast's customers fell into two groups: those
						running only pre-recorded sessions, who could precisely schedule content, and those
						hosting live or mixed sessions, who often faced unpredictable timings and had to
						manually adjust schedules when sessions overran or ended early. To alleviate this
						burden, adopting a more flexible approach reduced stress for organizers and enhanced the
						attendee experience.
					</p>
				</div>
				<div class="space-y-2">
					<p class="text-lg font-bold">My Role</p>
					<p>
						As Lead Designer, I designed and implemented a flexible session-management and
						redirection feature for Goldcast. I introduced two management modes (Automatic for
						pre-recorded sessions, Manual for live/mixed sessions), created seamless attendee
						workflow so people are auto-redirected to the next session or main stage when a session
						ends, and built a backstage interface that includes tools like a “Practice on Stage”
						button and a countdown timer — making session transitions smoother for both organizers
						and speakers.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
