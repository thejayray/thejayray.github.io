---
layout: post
date: 07/05/2013
permalink: /2013/07/tagged-follow-up/
tweet: I got a lot of great feedback from last week’s article; here's some follow-up.
tags: post, Apple, Mavericks, Mac OS X, iOS, Post, Tags, File System
title: Tagged: Follow-up
---

<h2 id="feedback">Feedback</h2>

<p>I got a lot of great feedback from <a href="/2013/06/apples-sneak-attack-on-the-file-system" title="Apple’s Sneak Attack on the File System - Engineered Eloquence">last week’s article</a>; I even got mentioned on <a href="http://www.loopinsight.com/2013/06/27/mavericks-finder-tags/" title="Mavericks Finder Tags - The Loop">Jim Dalrymple’s The Loop</a>! I had fun writing that piece because Mavericks seems to be a hot topic in the tech industry right now, complete with articles by <a href="http://thenextweb.com/apple/2013/06/28/os-x-mavericks-icloud-and-the-rise-of-the-populist-file-system/" title="OS X Mavericks, iCloud and the rise of the populist file system - The Next Web">Matt Panzarino at The Next Web</a>, the aforementioned Loop articles, and others. Nevertheless, I wanted to follow-up with a few thoughts that were brought up in the feedback process and this week’s The Talk Show with John Gruber.</p>

<p>Jack Wellborn (<a href="http://twitter.com/jackwellborn" title="Jack Wellborn - Twitter">@jackwellborn</a>) sent me <a href="https://twitter.com/JackWellborn/status/350630745825492992" title="RE: Tags">this tweet</a>:</p>

<blockquote>
<p>@JayRay Re: tags. A thought I have been mulling is how tags could compliment filetype as way for iOS apps to share documents. Thoughts?</p>
</blockquote>

<p>Thanks for the thought, Jack! I replied that I would have to answer in a longer form since that question is loaded! So here are my thoughts.</p>

<h2 id="thehiddenfeatureoftagging">The Hidden Feature of Tagging</h2>

<p>Last week, I discussed the possibility of a future tagging implementation within Apple’s mobile operating system, giving way to the possibility of a shared system by which a user’s documents could be accessed—much like the current Photos implementation—by any app that uses a built-in API. I also mentioned briefly how tags could communicate file type/originating application to make the experience better for the user in that only the compatible file types show up when accessed.</p>

<p>John Gruber discussed something similar on <a href="http://www.muleradio.net/thetalkshow/46/" title="The Talk Show, Episode 46: Close Encounters of the Seventh Kind">this week’s The Talk Show</a>, where John and Craig Hockenberry discuss many topics but ended with a discussion of tags, starting at 1:23:24.</p>

<blockquote>
<p>This is the way around iCloud sandboxing.</p>

<p>-John Gruber, The Talk Show, Episode 46, 1:23:56</p>
</blockquote>

<p>Something I hadn’t even remotely thought about was how tags interacted with iCloud when crossing sandboxed application boundaries within the OS. In other words, tag something in TextEdit and save to iCloud, open that tag in a Finder window, and open that iCloud-saved document in another application. </p>

<p>After further testing, I found that I could create a document in iCloud using TextEdit, then open that file from Finder with (<em>shudder</em>) Microsoft Word. Now, because Word has not been updated to support iCloud’s Documents in the Cloud, I could not use the “Open…” dialogue to access the document, but “Open with…” in Finder worked without a hitch. I was even able to save the document within Word and have the edits appear in TextEdit at next launch.</p>

<h2 id="tagsonios">Tags on iOS</h2>

<p>Which gets me back to my original follow-up point: Tags in iOS. If nothing else, the realization of this hand-off capability has strengthened my case for an iOS implementation of tags moving forward, although I believe that Apple will deemphasize file extensions to promote filetypes and tags, as Jack Wellborn suggests. The implementation specifics aside, I stand by my statement that “Photos” on iOS and “All My Files” on OS X show us the ideal way that files might be accessed and arranged in iOS for use across multiple applications.</p>

<p><strong>Here is a hypothetical scenario:</strong></p>

<ol><li><p>Open iA Writer and begin writing a new document.</p></li>
<li><p>When saving the document, the user is prompted to tag it.
</p><ul><li>If the user chooses not to tag the document, the file type, originating application, and other appropriate metadata will be added by default as tags.</li></ul></li>
<li><p>If the user also uses another text editor, they can open that app, grant access to their iCloud documents, and search by tag (if used) or originating application.
</p><ul><li>Since the hypothetical text editor has registered as being able to only read text documents, those are the only available documents when the interface is accessed, so there is no need for the user to search or whittle down by file type.</li>

<li>As an aside, I think that this could be used in addition to the current document passing mechanism. However, the current mechanism creates copies in each application, whereas the new mechanism would simply access—and thereby save to—the iCloud document.</li>

</ul></li>
</ol><p>As I said previously, Mavericks is an educational step for Apple to communicate that Tags are the future of document storage and information architecture. iOS will come next but it has to be foolproof, which is where Jack’s idea comes in. The fact is that users will not warm up to tags, unless some of the work is done for them. Tags have to be built into the document saving process with default tags being added based on file type, originating application, and creation statistics such as date, at least. If the proper amount of hand-holding doesn’t take place, the average user will never use it. However, I think the moment a user creates a new text document and the file type, tags, and other metadata allow them to quickly access said file from any device and application, the majority of people will be sold on the idea.</p>