clean:
	rm -rf playwright-report
	rm -rf test-results

walkthrough:
	npx playwright test tests/002_walkthrough/walkthrough.spec.ts

test:
	npx playwright test tests/001_pages/*